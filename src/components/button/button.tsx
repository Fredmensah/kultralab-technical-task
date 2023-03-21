import React from "react";
import { Text, TouchableHighlight } from 'react-native';
import { color } from "../../theme";
import ButtonProps from "./button.props";
import { ButtonContainer, Label } from "./button.style";

export const PrimaryButton: React.FC<ButtonProps> = ({title, onPress, mode, ...rest}) => {
    return (
        <ButtonContainer
            onPress={onPress}
            mode={mode}
            {...rest}
        >
            <Label mode={mode}>
                {title}
            </Label>
        </ButtonContainer>
    );
}