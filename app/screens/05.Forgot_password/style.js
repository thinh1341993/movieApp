import { StyleSheet } from "react-native"
import { color, distance, font, spacing } from "../../theme"

const styles = StyleSheet.create({
    logo: {
        height: distance.windowHeight * 0.4,

        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        alignSelf: 'center',
        fontSize: font.s15,
        textAlign: 'center'
    },
    input: {
        marginHorizontal: spacing.w45
    }
})

export default styles
