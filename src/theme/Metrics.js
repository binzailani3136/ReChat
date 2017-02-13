import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeightTmp = width < height ? height : width;
const bottomMargin = 24;

const metrics = {
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: (Platform.OS === 'ios') ? screenHeightTmp : screenHeightTmp - bottomMargin,
  navBarHeight: (Platform.OS === 'ios') ? 60 : 60,
  navBarBottomPadding: Platform.OS === 'android' ? 3 : 0,

  footerHeight: width / 7,
  statusBarHeight: 20,
  listItemHeight: screenHeightTmp / 8,
  defaultPadding: 20,
  iconSizeSmall: 15,
};

export default metrics;
