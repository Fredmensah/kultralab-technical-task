import React from "react";
import { ActivityIndicator, View } from "react-native";
import { color } from "../../theme";
import PrimaryActivityIndicatorProps from "./activity-loader.props";
import { Container, LoadingText } from "./activity-loader.style";

export const PrimaryActivityIndicator: React.FC<PrimaryActivityIndicatorProps> = ({text}) => {
    return (
        <Container>
            <ActivityIndicator size="large" color={color.primary} />
            <LoadingText>{text}</LoadingText>
        </Container>
    )
}
