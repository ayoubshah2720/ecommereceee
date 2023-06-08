import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import OnboardingComp from './screens/OnboardingComp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Signup from './screens/auth/Signup';
import Signin from './screens/auth/Singin';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Onboarding'
          component={OnboardingComp}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Signin'
          component={Signin}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{headerShown:false}}
        />
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
