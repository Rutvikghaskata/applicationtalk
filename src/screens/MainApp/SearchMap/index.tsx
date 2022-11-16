import {View, Text, Image, Animated, Dimensions, Platform} from 'react-native';
import React, {useState, useEffect, FunctionComponent} from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import {Hospital, Doctor, Pin, Verified} from '../../../Theme/Icons';
import {GoogleMapData} from '../../../lib/utils/CommonUtils';
import {styles} from './styles';
import {Colors, Fonts} from '../../../Theme';
import {StarRating} from '../../../lib/utils/CommonFunction';
import Header from '../../../components/header';
import {useAppNavigation} from '../../../navigations/hook';
import {SearchInput} from '../../../components/Common';
import {CardProps} from './types';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 100;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 40;

const SearchMap = () => {
  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude), setLongitude(info.coords.longitude);
    });
  }, []);

  const [latitude, setLatitude] = useState<number>(37.7767079403032);
  const [longitude, setLongitude] = useState<number>(-122.43240002542734);

  const initialMapState = {
    GoogleMapData,
    region: {
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 0.02922,
      longitudeDelta: 0.02421,
    },
  };
  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= initialMapState.GoogleMapData.length) {
        index = initialMapState.GoogleMapData.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }
      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const {coordinate} = initialMapState.GoogleMapData[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: initialMapState.region.latitudeDelta,
              longitudeDelta: initialMapState.region.longitudeDelta,
            },
            1000,
          );
        }
      }, 10);
    });
  });
  const interpolations = initialMapState.GoogleMapData.map((data, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  const onMarkerPress = (mapEventData: {_targetInst: {return: {key: any}}}) => {
    const markerId = mapEventData._targetInst.return.key;
    let x = markerId * CARD_WIDTH + markerId * 20;
    if (Platform.OS === 'android') {
      x = x - SPACING_FOR_CARD_INSET;
    }
    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  };

  const navigation = useAppNavigation();

  const [search, setSearch] = useState<string>('');
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <View style={styles.headerBackground}>
        <SearchInput
          value={search}
          placeholder="Search Doctor & Hospital"
          onChangeText={text => setSearch(text)}
          style={{backgroundColor: 'white', borderWidth: 0}}
        />
      </View>
      <MapView
        ref={_map}
        style={styles.mapView}
        region={initialMapState.region}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}>
          <Image source={Pin} style={{height: 60, width: 60}} />
        </Marker>
        {initialMapState.GoogleMapData.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={e => onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap, scaleStyle]}>
                {marker.type === 'doctor' ? (
                  <Doctor height="80%" />
                ) : (
                  <Hospital height="80%" />
                )}
              </Animated.View>
            </Marker>
          );
        })}
      </MapView>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {initialMapState.GoogleMapData.map((data, index) => (
          <View key={index}>
            <Card data={data} index={index} />
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const Card: FunctionComponent<CardProps> = ({data, index}) => {
  return (
    <View style={styles.cardContainer} key={index}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: data.imgUrl}}
          style={{height: '100%', width: '100%', borderRadius: 5}}
        />
      </View>
      <View style={styles.InfoWrapper}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.otherInfo}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {data.isVerified && (
              <Text style={{marginRight: 5}}>
                <Verified />
              </Text>
            )}
            <Text style={styles.date}>{data.date}</Text>
          </View>
          <StarRating rating={data.rating} />
        </View>
      </View>
    </View>
  );
};
export default SearchMap;
