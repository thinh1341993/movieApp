import React, {useState, useEffect, useRef} from 'react';
// import AsyncStorage from '@react-native-community/async-storage';
// import NetInfo from '@react-native-community/netinfo';
import {connect, useDispatch} from 'react-redux';

import RootNavigator from './navigations/root-navigator';

export const RootContainer = (props) => {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     NetInfo.addEventListener(state => {
  //       console.log('isConnected', state);
  //       dispatch({
  //         type: 'SAVE_INTERNET_STATUS',
  //         internetConnection: state.isConnected,
  //       });
  //     });
  //   }, []);

  return <RootNavigator />;
};

const mapStateToProps = (state) => ({
  obj: state.obj,
});

export default connect(mapStateToProps, null)(RootContainer);
