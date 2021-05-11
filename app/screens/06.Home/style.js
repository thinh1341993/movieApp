import {StyleSheet} from 'react-native';
import {color, distance, font, spacing} from '../../theme';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: (400 / distance.uiHeight) * distance.windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  titleMovie: {
    color: color.white,
    textAlign: 'center',
    fontSize: font.s12,
    maxWidth: 100,
  },
  linearGradientCarousel: {
    flex: 1,
    height: distance.windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCarousel: {
    width: '100%',
    height: 'auto',
  },
  tittleCarousel: {
    color: 'white',
    position: 'absolute',
    fontSize: font.s27,
    textAlign: 'center',
    paddingHorizontal: spacing.w40,
  },
  textCategories: {
    fontSize: font.s12,
    paddingHorizontal: spacing.w16,
    borderRightWidth: 1,
    borderColor: 'rgba(126, 126, 126, 0.85)',
  },
  image: {
    resizeMode: 'center',
    width: 360,
    marginBottom: 40,
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
  },
  rateStar: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  title: {
    fontSize: font.s15,
    fontWeight: 'bold',
    marginTop: spacing.h24,
    marginBottom: spacing.h13,
    color: color.white,
    marginLeft: spacing.w16,
  },
});

export default styles;
