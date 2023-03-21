import { TextInputProps } from "react-native";

export default interface PrimaryInputProps extends TextInputProps {
    label: string

    name: string
    // Name on input box

    errorMsg: string

    required: boolean;

    setIsValid: Function;

    setCheckValidity?: Function;
}
