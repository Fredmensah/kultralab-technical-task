import styled from "@emotion/native"
import { color } from "../../theme"

export const ButtonContainer = styled.TouchableHighlight`
    background-color: ${(props) => props.mode === "primary" ? color.primary : color.background};
    width: 200px;
    border-color: ${color.primary};
    border-radius: 30px;
    border-width: 2px;
    padding: 15px;
    margin: 5px 2px;
`

export const Label = styled.Text`
    color: ${(props) => props.mode === "primary" ? color.background : color.primary};
    font-weight: 700;
    align-self: center;
    font-size: 16px;
    font-family: 'Montserrat';
`