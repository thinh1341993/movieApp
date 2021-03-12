import { StyleSheet } from "react-native"
import { color, distance, font, spacing } from "../../theme"

const styles = StyleSheet.create({
    top: {
        height: distance.windowHeight,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },
    linearGradient: {
        flex: 1,
        width: '100%'
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: distance.windowHeight * 0.3,
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    textLogo: {
        fontSize: font.s16,
        color: color.yellowMain,
        fontWeight: 'bold',
    },
    social: {
        marginTop: spacing.h24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: spacing.h21
    },

    line: {
        backgroundColor: 'white',
        opacity: 0.36,
        height: 1,
        width: '30%'
    }
})

export default styles
