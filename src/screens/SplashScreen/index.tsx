import {SafeAreaView, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/Images/Splace-Screen.png')}
        style={styles.image}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Height,
    width: Width,
    resizeMode: 'cover',
  },
});
