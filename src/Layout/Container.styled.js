import styled from "styled-components";
import { device } from "../variables/MediaQuery";

const Container = styled.div`
    display: none;
    
    width: 960px;
    height: 601px;
    
    border-radius: 16px;
    overflow: hidden;

    @media ${ device.minWidth.laptop } {
        display: flex;
    }
`

export default Container;