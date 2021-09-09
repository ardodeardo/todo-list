import styled from "styled-components";
import { colorPallete } from "../../variables/ColorPallete";

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

export const ButtonEmptySearchInput = styled.button`
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
        color: ${ colorPallete.red }
    }
`