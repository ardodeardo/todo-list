import styled from "styled-components";
import { colorPallete } from "./ColorPallete";

const Todo = styled.main`
    position: relative;
    /* min-width: 1024px; */
    width: 100vw;
    /* min-height: 768px; */
    height: 100vh;

    display: grid;
    place-items: center;  

    background-color: ${ colorPallete.purple };
`

export default Todo;

