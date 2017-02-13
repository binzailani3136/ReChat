import { Platform } from 'react-native';

import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';


const Styles = {
  fullScreen: {
    width: Metrics.screenWidth,
    ...Platform.select({
      ios: {
        paddingBottom: 0,
        height: Metrics.screenHeight,
      },
      android: {
        paddingBottom: 0,
        height: Metrics.screenHeight + 24,
      },
    }),
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.brandSecondary,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonShadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 8,
    },
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 8,
  },
  buttonShadowSmall: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 3,
    },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 3,
  },
  circleButtonShadow: {
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0, height: 4,
    },
    shadowColor: '#000',
    shadowRadius: 2,
    elevation: 4,
  },
  navBarStyle: {
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    backgroundColor: Colors.brandPrimary,
    height: Platform.OS === 'ios' ? Metrics.navBarHeight + 5 : Metrics.navBarHeight,
    marginTop: Platform.OS === 'ios' ? -Metrics.statusBarHeight : 5,
  },
  listItemContainer: {
    width: Metrics.screenWidth,
    height: Metrics.listItemHeight,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderPrimary,
  },
  iconSmall: {
    width: Metrics.iconSizeSmall,
    height: Metrics.iconSizeSmall,
  },
  buttonStyle: {
    width: Metrics.screenWidth * 0.9,
    backgroundColor: Colors.brandSecondary,
    height: Metrics.screenHeight / 12,
  },
  buttonTextStyle: {
    ...Fonts.style.bold,
    color: Colors.brandPrimary,
    fontSize: Fonts.size.h6,
  },
  buttonStyle1: {
    backgroundColor: Colors.brandSecondary,
    height: Metrics.screenHeight / 15,
    borderWidth: 1,
    borderColor: Colors.brandPrimary,
  },
  buttonTextStyle1: {
    ...Fonts.style.regular,
    color: Colors.textPrimary,
    fontSize: Fonts.size.regular,
  },
  buttonStyle2: {
    backgroundColor: Colors.brandPrimary,
    height: Metrics.screenHeight / 15,
  },
  buttonTextStyle2: {
    ...Fonts.style.regular,
    color: Colors.textSecondary,
    fontSize: Fonts.size.regular,
  },
};

export default Styles;
