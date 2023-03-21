import {Dimensions, ViewStyle} from 'react-native';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

/**
 * All screen keyboard offsets.
 */
export const offsets = {
  none: 200,
};

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets;

/**
 * All the variations of screens.
 */
export const presets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   */
  fixed: {
    outer: {
      flex: 1,
      height: screenHeight,
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: screenHeight,
      width: screenWidth,
    } as ViewStyle,
    flex: {
      display: 'flex',
      flex: 1,
    },
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   *
   * Pick this one if you don't know which one you want yet.
   */
  scroll: {
    outer: {
      flex: 1,
      flexGrow: 1,
      height: screenHeight,
    } as ViewStyle,
    inner: {
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      height: screenHeight,
      width: screenWidth,
    } as ViewStyle,
  },
};

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets;