/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import store from './app/redux/createStore';

import {View, Text} from 'react-native';

import RootContainer from './app/RootContainer';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';

enableScreens();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaProvider>
        <NavigationContainer>
          <RootContainer />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
