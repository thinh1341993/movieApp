import { Dimensions } from "react-native"
const windowWidth = Dimensions.get("window").width
const windowHeight = Dimensions.get("window").height

export const distance = {
    windowWidth: windowWidth,
    windowHeight: windowHeight,
    uiWidth: 375,
    uiHeight: 812
}
