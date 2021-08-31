import styled from "styled-components";
import { colorPallete } from "../../Layout/ColorPallete";

export const FilterContainer = styled.div`
    background-color: ${ colorPallete.dark_blue };
    padding: 12px 30px;
    width: 100%;
    margin-top: 21px;
`

export const Form = styled.form`
    display: inline-grid;
    column-gap: 16px;
    grid-template-columns: 1fr 2fr;

    > div {
        position: relative;

        > svg {
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translateY(-50%);
            z-index: 1;
            color: ${ colorPallete.light_gray }
        }
    }
`