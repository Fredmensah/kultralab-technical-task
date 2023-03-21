import {Dimensions} from 'react-native';

export const ScreenDimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

export const allAreTrue = (obj: {[key: string]: boolean}): boolean => {
  return Object.values(obj).every(element => element === true);
};