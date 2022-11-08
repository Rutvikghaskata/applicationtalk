import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthStack, AppStack} from './router';
import {SplashScreen} from './screens';

const Main = () => {
  const [splash, setSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isGetToken, setIsGetToken] = useState(false);
  useEffect(() => {
    try {
      AsyncStorage.getItem('token').then(token => {
        if (token !== null) {
          setIsLoggedIn(true);
          setIsGetToken(true);
        } else {
          setIsLoggedIn(false);
          setIsGetToken(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {setSplash(false)},2000)
  }, []);
  return splash ? (
    <SplashScreen />
  ) : (
    isGetToken && (isLoggedIn ? <AppStack /> : <AuthStack />)
  );
};

export default Main;
