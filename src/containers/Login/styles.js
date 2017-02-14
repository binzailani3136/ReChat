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
    ...Fonts.style.bold,
    fontSize: Fonts.size.h1,
    color: Colors.textSecondary,
    marginTop: 10,
  },
  textInputStyle: {
    ...Fonts.style.regular,
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight / 13,
    borderColor: Colors.brandSecondary,
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.textSecondary,
    fontSize: Fonts.size.h6,
  },
  signUpBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  signUpDescStyle: {
    ...Fonts.style.regular,
    fontSize: Fonts.size.regular,
    color: Colors.textThird,
  },
  signUpButtonStyle: {
    ...Fonts.style.semiBold,
    fontSize: Fonts.size.regular,
    color: Colors.textSecondary,
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    left: 15,
  },
});
