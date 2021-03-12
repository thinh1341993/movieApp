/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux'
import store from './app/redux/createStore'

import {
  View,
  Text,
} from 'react-native';

import Home from './app/screens/06.Home/home'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </Provider>
  );
};


export default App;
