import styled from "@emotion/native"
import { color } from "../../theme"

export const Container = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid red;
`

export const LoadingText = styled.Text`
	font-size: 16px;
    font-family: 'Montserrat';
    margin-top: 10px;
	color: ${color.text};
`