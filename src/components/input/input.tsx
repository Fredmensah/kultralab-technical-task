import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';
import useInputValidation from "../../hooks/useInputValidation";
import { color } from "../../theme";

import PrimaryInputProps from "./input.props";
import { ErrorText, InputView, LabelText, TextInputComp } from "./input.style";

export const PrimaryInput: React.FC<PrimaryInputProps> = ({
    label,
    name,
    errorMsg,
    required,
    onChangeText,
    setIsValid,
    setCheckValidity,
    onFocus = () => {},
    ...rest
}) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [errorState, errorText, onChange] = useInputValidation(
        name,
        errorMsg,
        required,
        setIsValid,
        onChangeText,
        setCheckValidity,
    );

    return (
        <View>
            <LabelText>{label}</LabelText>

            <InputView
                style={[
                {
                    borderColor: errorState
                    ? color.error
                    : isFocused
                    ? color.primary
                    : color.inputBg,
                    alignItems: 'center',
                },
                ]}
                error={errorState}
            >
                <TextInputComp
                    autoCorrect={false}
                    onFocus={(e) => {
                        onFocus(e);
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={onChange}
                    placeholder="Enter dog name"
                    {...rest}
                />
            </InputView>
            
            { errorState && <ErrorText>{errorText}</ErrorText> }
        </View>
    )
}