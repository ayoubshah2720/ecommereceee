import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, Image, StyleSheet, Text, View } from 'react-native';
import OnboardingComp from './screens/OnboardingComp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Singin';
import auth from "@react-native-firebase/auth";
import Toast from 'react-native-root-toast';


export default function App() {
  useEffect(() => {
    // back handle exit app
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler);
    };
  }, []);
  const backButtonHandler = () => {
    Alert.alert(
      'Exit Alert..!',
      'Are you sure you want to exit.?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
      cancelable: false
    }
    )
    return true;
  }

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  auth().onAuthStateChanged((user) => {
    console.log('user', user)
    if (user) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  })
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Onboarding'
          component={OnboardingComp}
          options={{ headerShown: false }}
        />
        {isUserLoggedIn ? (
          <Stack.Screen
            name='Home'
            component={Home}
          />
        ) : null}
        {!isUserLoggedIn ? (
          <Stack.Screen
            name='Signin'
            component={Signin}
            options={{ headerShown: false }}
          />
        ) : null}
        {!isUserLoggedIn ? (
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{ headerShown: false }}
          />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
