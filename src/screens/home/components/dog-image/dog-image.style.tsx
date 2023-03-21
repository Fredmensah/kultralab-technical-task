import styled from "@emotion/native"
import { color } from "../../../../theme"
import { ScreenDimensions } from "../../../../utils/system-helpers"

export const ImageView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-vertical: 10px;
    width: 100%
`

export const DogAvatar = styled.Image`
    width: ${ScreenDimensions.width * 0.9 + 'px'};
    height: 300px;
    border-radius: 10px;
`

export const NameView = styled.View`
    width: ${ScreenDimensions.width * 0.9 + 'px'};
    background-color: ${color.text};
    opacity: 0.7;
    padding: 10px;
    height: 50px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    bottom: 0;
`

export const NameText = styled.Text`
    text-align: center;
    font-size: 20px;
    font-family: Poppins-SemiBold;
    color: ${color.background};
`

export const DeleteButton = styled.TouchableHighlight`
    background-color: ${color.error};
    width: 50px;
    height: 50px;
    border-radius: 5px;
    position: absolute;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    top: ${ScreenDimensions.width * 0.05 + 'px'};
    right: ${ScreenDimensions.width * 0.1 + 'px'};
`

export const ModalView = styled.View`
    height: ${ScreenDimensions.height * 0.5};
    width: ${ScreenDimensions.height * 0.6};
    background-color: ${color.background};
    border-width: 1px;
    border-radius: 10px;
    border-color: #ddd;
    border-bottom-width: 0px;
    shadow-color: #000;
    padding-vertical: 50px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    elevation: 1;
`

export const DeleteText = styled.Text`
    text-align: center;
    font-size: 16px;
    font-family: Poppins-SemiBold;
    color: ${color.text};
    margin-vertical: 30px;
`

export const ModalParentView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`