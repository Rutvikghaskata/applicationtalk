import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

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
const SearchMap = () => {
  const [coordinates, setCoordinates] = useState<Props>();
  useEffect(() => {
    Geolocation.getCurrentPosition(info => setCoordinates(info.coords));
  });
  const [region, setRegion] = useState<RegionProps>({
    latitude: 37.7767079403032,
    longitude:  -122.43240002542734,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{height: '100%', width: '100%'}}
        region={{
          latitude: 37.7767079403032,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={info => console.log('info', info)}
      />
    </View>
  );
};

export default SearchMap;
