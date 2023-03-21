import { ButtonProps } from "react-native";

/* eslint-disable semi */
export default interface PrimaryButtonProps extends ButtonProps {
  mode: 'primary' | 'secondary';
  // Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.

  color?: string;
  // Custom text color for flat button, or background color for contained button.

  loading?: boolean;
  // Whether to show a loading indicator.

  disabled?: boolean;
  // Whether the button is disabled. A disabled button is greyed out and onPress is not called on touch.

  children?: React.ReactNode;
  // Label text of the button.

  contentStyle?: Object;
  // Style of button's inner content. Use this prop to apply custom height and width and to set the icon on the right with flexDirection: 'row-reverse'.

  style?: Object;

  labelStyle?: Object;
  // Style for the button text.
}
