import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {color, distance, font, spacing} from '../../theme';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
} from '../../data/axios';
import FastImage from 'react-native-fast-image';
import RadialGradient from 'react-native-radial-gradient';

const home = (props) => {
  useEffect(() => {
    const fetchAPI = async () => {};
    fetchAPI();
  }, []);

  return <ScrollView style={{backgroundColor: color.black}}></ScrollView>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export const HomeScreen = connect(mapStateToProps, null)(home);
