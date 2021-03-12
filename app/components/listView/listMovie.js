import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import { color, distance, font, spacing } from "../../theme"

export const ListMovie = (data, onPress) => {

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

    const renderListMovie = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => onPress}
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

    return (
        <FlatList
            data={data}
            renderItem={renderListMovie}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    )
}