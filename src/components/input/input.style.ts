import styled from "@emotion/native"
import { ViewProps } from "react-native"
import { color } from "../../theme"

interface AddedViewProps extends ViewProps {
    error: boolean
}

export const TextInputComp = styled.TextInput`
    color: ${color.text};
    flex: 1;
`
export const InputView = styled.View(props => ({
    height: 55,
    width: '90%',
    backgroundColor: `${color.inputBg}`,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: `${props.error ? 1 : 0.5}`,
    borderRadius: 10,
    borderColor: `${props.error ? color.error : color.inputBg}`,
    marginBottom: 10,
}))

export const LabelText = styled.Text`
    margin-vertical: 5px;
    font-size: 16px;
    font-family: Montserrat;
    color: ${color.placeholder};
`

export const ErrorText = styled.Text`
    margin-vertical: 5px;
    font-size: 16px;
    font-family: Montserrat;
    color: ${color.error};
`