import styled from "@emotion/native"
import { ScreenDimensions } from "../utils/system-helpers"

export const FULLSCREEN = styled.View`
    height: ${ScreenDimensions.height};
    width: ${ScreenDimensions.width};
    padding: ${ScreenDimensions.height * 0.05};
`

export const FLEXBOXROWCENTER = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const FLEXBOXCOLUMNCENTER = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`