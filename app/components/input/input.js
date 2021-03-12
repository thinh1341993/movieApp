import React from 'react'
import { TextInput, View, Text } from "react-native"
import { color, distance, font, spacing } from "../../theme"

export const Input = ({ placeholder, title, isPassword, inputValue, setInputValue }) => {
    const [IsFocusInput, SetIsFocusInPut] = React.useState(false)

    return (
        <View style={{ marginBottom: spacing.h29 }}>
            <Text style={{
                fontSize: font.s14,
                color: color.white,
                fontWeight: 'bold',
                marginBottom: 5,
                letterSpacing: 0.84
            }}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='rgb(162,162,162)'
                value={inputValue}
                onChangeText={(change) => setInputValue(change)}
                style={{
                    backgroundColor: 'rgb(33,33,33)',
                    color: "white",
                    fontSize: font.s17,
                    paddingLeft: 20,
                    borderRadius: 9,
                    borderColor: IsFocusInput || inputValue !== "" ? "rgb(147,194,47)" : "rgb(239,239,239)",
                }}
                onFocus={() => SetIsFocusInPut(true)}
                onEndEditing={() => SetIsFocusInPut(false)}
                secureTextEntry={isPassword}
            />
        </View>
    )
}