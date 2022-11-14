import {View, Text, Image, Animated, Dimensions, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import {Hospital, Doctor, Pin, Verified} from '../../../../Theme/Icons';
import {GoogleMapData} from '../../../../lib/utils/CommonUtils';
import {styles} from './styles';
import {Colors, Fonts} from '../../../../Theme';
import {StarRating} from '../../../../lib/utils/CommonFunction';
interface Props {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
}

interface RegionProps {
  latitude: number | string | null;
  longitude: number | string | null;
  latitudeDelta: number | string | null;
  longitudeDelta: number | string | null;
}

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 110;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 35;

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
    // Alert.alert(markerId)
  };

  return (
    <View style={{flex: 1}}>
      <MapView
        ref={_map}
        style={{height: '100%', width: '100%'}}
        region={initialMapState.region}
        // customMapStyle={mapDarkStyle}
        // onRegionChange={info => console.log('info', info)}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          // image={Pin}
        >
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
          <View
            style={{
              elevation: 10,
              backgroundColor: '#FFF',
              borderRadius: 15,
              marginHorizontal: 10,
              shadowColor: '#000',
              shadowRadius: 5,
              shadowOpacity: 0.3,
              shadowOffset: {x: 2, y: -2},
              height: CARD_HEIGHT,
              width: CARD_WIDTH,
              padding: 15,
              overflow: 'hidden',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
            key={index}>
            <View style={{height: 80, width: 80}}>
              <Image
                source={{uri: data.imgUrl}}
                style={{height: '100%', width: '100%', borderRadius: 10}}
              />
            </View>
            <View
              style={{
                height: '100%',
                width: CARD_WIDTH - 110,
                justifyContent: 'space-between',
                paddingLeft: 15,
              }}>
              <Text
                style={{
                  color: Colors.sky,
                  fontSize: 16,
                  fontFamily: Fonts.Medium,
                }}>
                {data.name}
              </Text>
              <Text
                style={{
                  color: Colors.grey[400],
                  fontSize: 14,
                  fontFamily: Fonts.Regular,
                  marginTop: -5,
                }}>
                {data.description}
              </Text>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {data.isVerified && (
                    <Text style={{marginRight: 5}}>
                      <Verified />
                    </Text>
                  )}
                  <Text
                    style={{
                      color: Colors.grey[900],
                      fontSize: 14,
                      fontFamily: Fonts.Regular,
                    }}>
                    {data.date}
                  </Text>
                </View>
                <StarRating rate={data.rate}/>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default SearchMap;
