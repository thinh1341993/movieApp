import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { color, distance, font, spacing } from "../../theme"
import styles from './style'
const onboarding = () => {

    return (
        <ScrollView style={{ backgroundColor: color.white }}>
            <View>
                <Text>Hello 1</Text>
            </View>
        </ScrollView>
    )
}

export default onboarding