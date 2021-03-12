import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native'
import { color, distance, font, spacing } from "../../theme"
import AppIntroSlider from 'react-native-app-intro-slider'
import styles from '../02.Onboarding/style'

const slides = [
    {
        key: 'one',
        title: 'Never miss the latest movie on a go.',
        text: 'The Movie Play is a correct guy...',
        image: require('../../assets/amico.png')
    },
    {
        key: 'two',
        title: 'Never miss the latest movie on a go.',
        text: 'The Movie Play is a correct guy...',
        image: require('../../assets/MaskGroup.png')
    },
    {
        key: 'three',
        title: 'Never miss the latest movie on a go.',
        text: 'The Movie Play is a correct guy...',
        image: require('../../assets/amico.png')
    },
]



const onboarding = () => {

    const renderItem = ({ item }) => {
        return (
            <View style={styles.intro}>
                <Image
                    source={item.image}
                    style={{
                        resizeMode: 'contain',
                        width: 250 / distance.uiWidth * distance.windowWidth,
                        height: 250 / distance.uiWidth * distance.windowWidth
                    }}
                ></Image>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.content}>{item.text}</Text>
            </View>
        )
    }

    const onPress = () => {
        console.log('sign')
    }


    return (
        <ScrollView style={{ backgroundColor: color.blackGray, }}>
            <Text style={styles.header}>Movie Play</Text>
            <AppIntroSlider
                renderItem={renderItem}
                data={slides}
                showNextButton={false}
                showDoneButton={false}
                dotStyle={{ backgroundColor: color.white }}
                activeDotStyle={{ backgroundColor: color.yellowMain }}
            />

            <TouchableOpacity
                onPress={() => onPress}
                style={styles.button}
            >
                <Text style={styles.textButton}
                >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPress}
                style={styles.button}
            >
                <Text style={styles.textButton}
                >Create an account</Text>
            </TouchableOpacity>

        </ScrollView >
    )
}

export default onboarding