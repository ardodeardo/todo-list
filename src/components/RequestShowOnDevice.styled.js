import styled from "styled-components";
import { device } from "../variables/MediaQuery";


export const RequestShowOnDevice =  styled.div`
    display: block;
    color: white;
    font-weight: 700;

    @media ${ device.minWidth.laptop } {
        display: none;
    }
`
