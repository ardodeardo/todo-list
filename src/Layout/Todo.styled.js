import styled from "styled-components";
import { colorPallete } from "./ColorPallete";

const Todo = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;  

  background-color: ${ colorPallete.purple };
`

export default Todo;

