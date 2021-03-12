import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { color, distance, font, spacing } from "../../theme"
import styles from './style'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel';
import { useDeviceOrientation } from "@react-native-community/hooks";
import {
    fetchMovies,
    fetchGenre,
    fetchMovieByGenre,
    fetchPersons,
    fetchTopratedMovie,
} from "../../data/axios";


const home = () => {
    const { landscape } = useDeviceOrientation();
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genre, setGenre] = useState([]);
    const [nameCategories, setNameCategories] = useState('Watching')
    const [choiceCategories, setChoiceCategories] = useState(0)
    const [watching, setWatching] = useState([]);
    const [topRate, setTopRate] = useState([]);
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
            setGenre(await fetchGenre())
            setPersons(await fetchPersons());
            setTopRate(await fetchTopratedMovie())
        };
        fetchAPI();
    }, []);

    const hottest = (id) => {
        console.log(id)
    }

    const rate = (ratePoint) => {
        let floor = Math.floor(ratePoint)
        let ceil = Math.ceil(ratePoint)
        let rating = []
        for (let i = 1; i < 6; i++) {
            let star = 'star'
            if (i > floor / 2) {
                if (i == ceil / 2 && floor % 2 == 1) {
                    star = 'star-half-empty'
                } else {
                    star = 'star-o'
                }
            }
            rating.push(
                <Icon
                    key={i}
                    iconStyle={{ marginHorizontal: 3 }}
                    name={star}
                    type="font-awesome"
                    size={14}
                    color={color.yellowMain}
                />
            )
        }
        return rating
    }

    const filterCategories = async (id, name) => {
        setChoiceCategories(id)
        setNameCategories(name)
        setWatching(await fetchMovieByGenre(id))
    }

    const renderCategories = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => filterCategories(item.id, item.name)}>
                <Text
                    style={{
                        fontSize: font.s12,
                        color: choiceCategories == item.id ? color.yellowMain : 'rgb(100, 100, 100)',
                        paddingHorizontal: 14,
                        borderRightWidth: 1,
                        borderColor: 'rgba(126, 126, 126, 0.85)'
                    }}
                >{item.name}</Text>
            </TouchableOpacity >
        )
    }

    const renderListMovie = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => console.log(item.id)}
                style={{ marginRight: 13, }}
            >
                <Image
                    resizeMethod='scale'
                    resizeMode='cover'
                    source={{ uri: item.poster }}
                    style={{
                        width: 100,
                        height: 150
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                }}>
                    {rate(item.rating)}
                </View>
                <Text style={{ color: color.white, textAlign: 'center', fontSize: font.s12, maxWidth: 100, }}>{item.title}</Text>
            </TouchableOpacity >
        )
    }

    const renderNowPlaying = (item, index) => {
        return (
            <View key={index}>
                <ImageBackground
                    resizeMethod='scale'
                    style={{ width: "100%", height: 'auto', }}
                    source={{ uri: item.item.backPoster }}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={['transparent', 'transparent', 'transparent', 'transparent', 'rgba(0,0,0,0.7)', 'black']}
                        style={{
                            flex: 1,
                            height: distance.windowWidth,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <TouchableOpacity
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => hottest(item.item.id)}
                        >
                            <Icon
                                name="playcircleo"
                                type="ant-design"
                                size={60}
                                color="white"
                            />
                        </TouchableOpacity>
                        <Text style={{ color: "white", position: 'absolute', bottom: 50, fontSize: font.s27, textAlign: 'center', paddingHorizontal: spacing.w40 }}>{item.item.title}</Text>
                    </LinearGradient>
                </ImageBackground>

                <Text style={styles.rate}>{item.item.rating}</Text>
                <View style={styles.rateStar}>
                    {rate(item.item.rating)}
                </View>
            </View>
        )
    }

    const renderPersons = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => console.log(item.id)}
                style={{ marginRight: 13, }}
            >

                <Image
                    resizeMethod='scale'
                    resizeMode='cover'
                    source={{ uri: item.profileImg }}
                    style={{
                        width: 100,
                        height: 150,
                        borderRadius: 999
                    }}
                />
                <Text style={{ color: color.white, textAlign: 'center', fontSize: font.s12, maxWidth: 100, }}>{item.name}</Text>

            </TouchableOpacity >
        )
    }


    return (
        <ScrollView style={{ backgroundColor: color.black }}>

            <Carousel
                keyExtractor={(item, index) => index.toString()}
                data={nowPlaying.slice(0, 4)}
                renderItem={renderNowPlaying}
                sliderWidth={landscape ? distance.windowHeight : distance.windowWidth}
                itemWidth={landscape ? distance.windowHeight : distance.windowWidth}
                autoplay={true}
                autoplayDelay={2000}
                loop={true}
            />

            <View style={{ marginLeft: spacing.w16 }}>
                <FlatList
                    data={genre}
                    renderItem={renderCategories}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}

                />
                <Text style={styles.title}>{nameCategories}</Text>
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
            </View>
        </ScrollView>
    )
}

export default home