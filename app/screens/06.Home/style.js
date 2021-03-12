import { StyleSheet } from "react-native"
import { color, distance, font, spacing } from "../../theme"

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        height: 400 / distance.uiHeight * distance.windowHeight,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        resizeMode: 'center',
        width: 360,
        marginBottom: 40
    },
    logo: {
        resizeMode: 'center',
        width: 360,
        height: 160,
        position: 'absolute',
        bottom: -20,
    },
    rate: {
        fontSize: 33,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 5,
        color: color.white,
        position: 'absolute',
        bottom: 25
    },
    rateStar: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: spacing.h17,
    },
    title: {
        fontSize: font.s15,
        fontWeight: 'bold',
        marginTop: spacing.h24,
        marginBottom: spacing.h13,
        color: color.white
    },
})

export default styles
