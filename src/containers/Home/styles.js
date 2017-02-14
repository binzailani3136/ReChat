import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  tabBarStyle: {
    ...Styles.center,
    borderTopWidth: 1,
    borderColor: Colors.borderPrimary,
  },
  titleStyle: {
    ...Fonts.style.regular,
    color: Colors.textPrimary,
  },
  badgeContainer: {
    ...Styles.center,
    marginTop: 15,
    marginRight: 3,
    width: 14,
    height: 14,
    backgroundColor: Colors.brandDanger,
    borderRadius: 7,
  },
  badgeTextStyle: {
    ...Fonts.style.regular,
    fontSize: Fonts.size.mini,
    color: Colors.textSecondary,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  tabIconsContainer: {
    ...Styles.center,
    width: Metrics.screenWidth / 12,
    height: Metrics.screenWidth / 12,
  },
});
