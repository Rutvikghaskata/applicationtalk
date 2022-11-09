import React from 'react';
import {OnBoarding,Signup,PersonalDetails} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Storage} from '../../config/lib';
const Stack = createStackNavigator();

const AuthStack = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(true);
  const [isGetItem, setIsGetItem] = React.useState(false);
  React.useEffect(() => {
    const appData = Storage.getItem('isAppFirstLaunched');
    if (appData === null) {
      setIsAppFirstLaunched(true);
      setIsGetItem(true);
      Storage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
      setIsGetItem(true);
    }
  }, []);

  return (
    isGetItem && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isAppFirstLaunched && (
            <Stack.Screen name="OnBoarding" component={OnBoarding} />
          )}
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="personalDetails" component={PersonalDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default AuthStack;
