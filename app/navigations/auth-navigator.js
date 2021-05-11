import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  OnboardingScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      initialRouteName="OnboardingScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
