import { StyleSheet } from "react-native"
import { color, distance, font, spacing } from "../../theme"

const styles = StyleSheet.create({

    avatar: {
        resizeMode: 'cover',
        width: 100,
        height: 100,
        borderRadius: 999,
        alignSelf: 'center',
        backgroundColor: color.blackTwo,
        marginVertical: spacing.h13
    },
    tittle: {
        fontSize: font.s15,
        alignSelf: 'center',
        color: color.white
    },
    input: {
        marginVertical: spacing.h46,
        marginHorizontal: spacing.w45
    }
})

export default styles
