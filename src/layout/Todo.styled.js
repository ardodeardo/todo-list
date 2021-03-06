import styled from "styled-components";
import { colorPallete } from "../variables/ColorPallete";

const Todo = styled.main`
    position: relative;
    /* min-width: 1024px; */
    width: 100vw;
    /* min-height: 768px; */
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${ colorPallete.purple };
`

export default Todo;

