import { StyleSheet } from "react-native"
import { color, distance, font, spacing } from "../../theme"

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignSelf: 'center',
        marginTop: spacing.h24,
        marginBottom: spacing.h13,
        fontSize: font.s27,
        color: color.yellowMain,
        fontWeight: 'bold'
    },
    intro: {
        alignItems: 'center',
        minHeight: 470,
    },
    title: {
        alignSelf: 'center',
        fontSize: font.s15,
        marginTop: spacing.h13,
        marginBottom: spacing.h13,
        color: color.white,
        fontWeight: 'bold'
    },
    content: {
        alignSelf: 'center',
        marginBottom: 64,
        color: color.textGray,
    },
    button: {
        height: 44,
        backgroundColor: color.yellowMain,
        marginHorizontal: spacing.w40,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.h13,

    },
    textButton: {
        color: 'white',
        fontSize: font.s17,
        fontWeight: 'bold'
    }
})

export default styles
