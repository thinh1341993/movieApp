import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'
import styles from './style'
import * as Progress from 'react-native-progress';

const flashScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/Image1_3x.png')}
            style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}
        >
            <ImageBackground
                source={require('../../assets/play_button_3x.png')}
                style={{ width: 100, height: 100, marginBottom: 20, justifyContent: 'center', alignItems: 'center' }}
            ><Progress.CircleSnail size={140} thickness={10} color={['red', 'green', 'blue']} /></ImageBackground>
            <Text style={{ fontSize: 34, color: 'rgb(255 ,187, 59)' }}>Movie Play</Text>

        </ImageBackground>
    )
}

export default flashScreen