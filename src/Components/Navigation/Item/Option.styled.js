import styled from "styled-components";
import { colorPallete } from "../../../Layout/ColorPallete";

export const OptionModal = styled.div`
    position: absolute;
    bottom: -24px;
    left: -27px;
    background-color: white;
    z-index: 2;
    border: 1px solid ${ colorPallete.light_gray };
    border-radius: 4px;
    overflow: hidden;
`

export const OptionList = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        display: inline-block;
        overflow: hidden;

        font-size: 12px;
        color: ${ colorPallete.dark_blue };

        button {
            padding: 4px 12px;
            width: 100%;
            border: none;
            background-color: white;
            font-size: 12px;
            color: ${ colorPallete.dark_blue };
            transition: color .3s, background-color .3s;

            &:hover {
                background-color: black;
                color: white;
            }
        }
    }
`