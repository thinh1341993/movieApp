import React from 'react'
import { TextInput, View, Text, TouchableOpacity } from "react-native"
import { color, distance, font, spacing } from "../../theme"

export const Button = ({ title, onPress }) => {
    const [IsFocusInput, SetIsFocusInPut] = React.useState(false)

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 44,
                borderRadius: 9,
                backgroundColor: color.yellowMain,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text style={{
                fontSize: font.s14,
                color: color.black,
                fontWeight: 'bold',
            }}>{title}</Text>
        </TouchableOpacity>
    )
}