import React from 'react';
import {StatusBar} from 'react-native';
import Main from './src/Main';
const App = () => {
  return (
    <>
      <StatusBar hidden/>
      <Main />
    </>
  );
};

export default App;
