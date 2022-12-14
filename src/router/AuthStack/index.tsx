import React,{FunctionComponent} from 'react';
import {
  OnBoarding,
  Signup,
  Otp,
  Login,
  PersonalDetails,
  Reset,
  Forget,
  Symptoms,
  MedicalInfo,
  LifeStyleInfo,
} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Storage} from '../../config/lib';
const Stack = createStackNavigator();

const AuthStack: FunctionComponent = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(true);
  const [isGetItem, setIsGetItem] = React.useState(false);
  React.useEffect(() => {
    try {
      Storage.getItem('isAppFirstLaunched').then(data => {
        if (data !== null) {
          setIsAppFirstLaunched(false);
          setIsGetItem(true);
        } else {
          setIsAppFirstLaunched(true);
          setIsGetItem(true);
          Storage.setItem('isAppFirstLaunched', 'false');
        }
      });
    } catch (error) {
      console.log(error);
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
          <Stack.Screen name="signIn" component={Login} />
          <Stack.Screen name="otp" component={Otp} />
          <Stack.Screen name="reset" component={Reset} />
          <Stack.Screen name="forget" component={Forget} />
          <Stack.Screen name="lifeStyleInfo" component={LifeStyleInfo} />
          <Stack.Screen name="medicalInfo" component={MedicalInfo} />
          <Stack.Screen name="symptoms" component={Symptoms} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
};

export default AuthStack;
