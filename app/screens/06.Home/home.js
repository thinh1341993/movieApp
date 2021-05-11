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
import {SafeAreaView} from 'react-native-safe-area-context';

const home = (props) => {
  const {landscape} = useDeviceOrientation();
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genre, setGenre] = useState([]);
  const [choiceCategories, setChoiceCategories] = useState({
    id: 0,
    name: 'Top New',
  });
  const [watching, setWatching] = useState([]);
  const [topRate, setTopRate] = useState([]);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenre(await fetchGenre());
      setTopRate(await fetchTopratedMovie());
      setPersons(await fetchPersons());
    };
    fetchAPI();
  }, []);

  const hottest = (id) => {
    console.log(id);
  };

  const rate = (ratePoint) => {
    let floor = Math.floor(ratePoint);
    let ceil = Math.ceil(ratePoint);
    let rating = [];
    for (let i = 1; i < 6; i++) {
      let star = 'star';
      if (i > floor / 2) {
        if (i == ceil / 2 && floor % 2 == 1) {
          star = 'star-half-empty';
        } else {
          star = 'star-o';
        }
      }
      rating.push(
        <Icon
          key={i}
          iconStyle={{marginHorizontal: 3}}
          name={star}
          type="font-awesome"
          size={14}
          color={color.yellowMain}
        />,
      );
    }
    return rating;
  };

  const filterCategories = async (id, name) => {
    setChoiceCategories({id, name});
    setWatching(await fetchMovieByGenre(id));
  };

  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => filterCategories(item.id, item.name)}>
        <Text
          style={[
            styles.textCategories,
            {
              color:
                choiceCategories.id == item.id
                  ? color.yellowMain
                  : 'rgb(100, 100, 100)',
            },
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderListMovie = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => console.log(item.id)}
        style={{marginRight: 13, marginLeft: index == 0 ? spacing.w16 : 0}}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          source={{
            uri: item.poster,
          }}
          style={{
            width: 100,
            height: 150,
          }}
        />
        <View style={styles.centerRow}>{rate(item.rating)}</View>
        <Text style={styles.titleMovie}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderNowPlaying = (item, index) => {
    return (
      <View key={index}>
        <ImageBackground
          resizeMethod="scale"
          style={styles.imageCarousel}
          source={{uri: item.item.backPoster}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[
              'transparent',
              'transparent',
              'transparent',
              'transparent',
              'rgba(0,0,0,0.7)',
              'black',
            ]}
            style={styles.linearGradientCarousel}>
            {/* <RadialGradient
            style={{
              flex: 1,
              height: distance.windowWidth,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            colors={['transparent', 'black']}
            stops={[0.8, 1]}
            radius={200}> */}
            <TouchableOpacity
              style={styles.center}
              onPress={() => hottest(item.item.id)}>
              <Icon
                name="playcircleo"
                type="ant-design"
                size={60}
                color="white"
              />
            </TouchableOpacity>
            <Text
              style={[styles.tittleCarousel, {bottom: 50}]}
              numberOfLines={1}>
              {item.item.title}
            </Text>
            {/* </RadialGradient> */}
          </LinearGradient>
        </ImageBackground>

        <Text style={[styles.rate, {bottom: 25}]}>{item.item.rating}</Text>
        <View style={[styles.rateStar, {marginBottom: spacing.h17}]}>
          {rate(item.item.rating)}
        </View>
      </View>
    );
  };

  const renderPersons = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => console.log(item.id)}
        style={{marginRight: 13, marginLeft: index == 0 ? spacing.w16 : 0}}>
        <FastImage
          //   resizeMethod="scale"
          //   resizeMode="cover"
          source={{uri: item.profileImg}}
          style={{
            width: 100,
            height: 150,
            borderRadius: 999,
          }}
        />
        <Text
          style={{
            color: color.white,
            textAlign: 'center',
            fontSize: font.s12,
            maxWidth: 100,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.black}}>
      <ScrollView
        contentContainerStyle={{backgroundColor: color.black}}
        showsVerticalScrollIndicator={false}>
        <Carousel
          keyExtractor={(item, index) => index.toString()}
          data={nowPlaying.slice(0, 4)}
          renderItem={renderNowPlaying}
          sliderWidth={landscape ? distance.windowHeight : distance.windowWidth}
          itemWidth={landscape ? distance.windowHeight : distance.windowWidth}
          autoplay={true}
          autoplayDelay={2000}
          loop={true}
          useScrollView={true}
        />

        <FlatList
          data={genre}
          renderItem={renderCategories}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.title}>{choiceCategories.name}</Text>
        <FlatList
          data={watching.length == 0 ? nowPlaying.slice(5) : watching}
          renderItem={renderListMovie}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.title}>Top Rated Movies</Text>
        <FlatList
          data={topRate}
          renderItem={renderListMovie}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.title}>Trending Persons On This Week</Text>
        <FlatList
          data={persons}
          renderItem={renderPersons}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export const HomeScreen = connect(mapStateToProps, null)(home);
