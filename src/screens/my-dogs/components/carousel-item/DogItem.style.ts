import styled from "@emotion/native"
import { color } from "../../../../theme"
import { ScreenDimensions } from "../../../../utils/system-helpers"

export const ItemView = styled.View`
    width: ${ScreenDimensions.width + 'px'};
    min-height: 300px;
    padding: ${ScreenDimensions.width * 0.05};
`