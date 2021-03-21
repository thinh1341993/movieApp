import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SplashScreen,
} from '../screens'


export function AuthStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
            initialRouteName={screens.OnboardingScreen}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}