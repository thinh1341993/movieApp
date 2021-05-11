import React, {useState, useEffect} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {SplashScreen} from '../screens';
import {AuthNavigator} from './auth-navigator';
import {AppNavigator} from './primary-navigator';
import {connect, useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const rootNavigator = (props) => {
  //state
  const [loading, setLoading] = useState(false);
  const [user, setUserToken] = useState(true);
  const dispatch = useDispatch();

  //   useEffect(() => {}, []);

  if (loading) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  } else if (user) {
    return AppNavigator();
  } else {
    return AuthNavigator();
  }
};

const mapStateToProps = (state) => ({
  obj: state.obj,
});

export default connect(mapStateToProps, null)(rootNavigator);
