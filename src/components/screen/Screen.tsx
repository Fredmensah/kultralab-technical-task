import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { ScreenProps } from "./screen.props";
import {presets} from './screen.presets';
import { color } from "../../theme";

const isIos = Platform.OS === 'ios';

const Screen = ({backgroundColor, children, preset: type, style: initialStyle, statusBar, statusBarColor, translucent, }: ScreenProps) => {
    const preset = presets[type];
    const style = initialStyle || {};

    const backgroundStyle = backgroundColor
    ? {backgroundColor: backgroundColor}
    : { backgroundColor: color.background};

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            behavior={isIos ? 'padding' : 'height'}
            enabled
            keyboardVerticalOffset={isIos ? 0 : 20}
        >
            <StatusBar
                barStyle={statusBar || 'light-content'}
                translucent={translucent || false}
                backgroundColor={statusBarColor}
            />
            <SafeAreaView style={[preset.outer, backgroundStyle]}>
                <ScrollView
                    style={[preset.outer, backgroundStyle]}
                    contentContainerStyle={[preset.inner, style]}
                >
                    {children}
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default Screen;