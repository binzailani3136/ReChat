import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  logoContainer: {
    ...Styles.center,
    width: Metrics.screenWidth / 2,
    height: Metrics.screenWidth / 2,
  },
  imgLogo: {
    width: Metrics.screenWidth / 4,
    height: Metrics.screenWidth / 4,
  },
  appNameText: {
    ...Fonts.style.regular,
    fontSize: Fonts.size.h3,
    color: Colors.textSecondary,
    marginTop: 10,
  },
  textInputStyle: {
    ...Fonts.style.regular,
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight / 12,
    borderColor: Colors.brandSecondary,
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textSecondary,
    fontSize: Fonts.size.h6,
  },
});
