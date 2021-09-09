import styled from "styled-components";
import { colorPallete } from "../../../variables/ColorPallete";

export const ItemBody = styled.div`
    position: relative;
    border-top: 1px;
    border-style: solid;
    border-color: ${ colorPallete.dark_blue };
    padding: .1px;
`

export const Description = styled.p`
    width: 402px;
    font-size: 12px;
    line-height: 1.4;
    color: ${ colorPallete.light_gray };
    margin: 14px 16px;
`

export const CloseDetailButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    display: grid;
    place-content: center;
    z-index: 1;
    background-color: transparent;
    border: 1px dashed white;
    padding: 4px;

    &:hover {
        border-color: ${ colorPallete.dark_blue };
    }

    svg {
        font-size: 12px;
    }
`