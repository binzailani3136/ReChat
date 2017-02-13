import { Platform } from 'react-native';
import Colors from './Colors';
import Metrics from './Metrics';

const type = {
  Black: 'TitilliumWeb-Black',
  Bold: 'TitilliumWeb-Bold',
  BoldItalic: 'TitilliumWeb-BoldItalic',
  ExtraLight: 'TitilliumWeb-ExtraLight',
  ExtraLightItalic: 'TitilliumWeb-ExtraLightItalic',
  Italic: 'TitilliumWeb-Italic',
  Light: 'TitilliumWeb-Light',
  LightItalic: 'TitilliumWeb-LightItalic',
  Regular: 'TitilliumWeb-Regular',
  SemiBold: 'TitilliumWeb-SemiBold',
  SemiBoldItalic: 'TitilliumWeb-SemiBoldItalic',
};

const size = {
  h1: 58,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  normal: 16,
  medium: 14,
  small: 12,
  mini: 10,
  tiny: 8.5,
};

const style = {
  h1: {
    fontFamily: type.SemiBold,
    fontSize: size.h1,
    backgroundColor: 'transparent',
  },
  h2: {
    fontFamily: type.SemiBold,
    fontSize: size.h2,
    backgroundColor: 'transparent',
  },
  h3: {
    fontFamily: type.SemiBold,
    fontSize: size.h3,
    backgroundColor: 'transparent',
  },
  h4: {
    fontFamily: type.Regular,
    fontSize: size.h4,
    backgroundColor: 'transparent',
  },
  h5: {
    fontFamily: type.Regular,
    fontSize: size.h5,
    backgroundColor: 'transparent',
  },
  h6: {
    fontFamily: type.Regular,
    fontSize: size.h6,
    backgroundColor: 'transparent',
  },
  regular: {
    fontFamily: type.Regular,
  },
  semiBold: {
    fontFamily: type.SemiBold,
  },
  bold: {
    fontFamily: type.Bold,
  },
};

export default {
  type,
  size,
  style,
};
