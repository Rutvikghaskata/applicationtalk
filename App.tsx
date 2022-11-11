import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/Main';
const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="dark-content"
      />
      <Main />
    </>
  );
};

export default App;
