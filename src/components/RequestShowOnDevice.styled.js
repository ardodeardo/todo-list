import styled from "styled-components";
import { device } from "../variables/MediaQuery";


export const RequestShowOnDevice =  styled.div`
    display: block;
    color: white;
    font-weight: 700;
    text-align: center;

    @media ${ device.minWidth.laptop } {
        display: none;
    }

    > h1 {
        font-style: italic;
    }

    > img {
        width: 120px;
        height: auto;
        margin-bottom: 16px;
    }
`
