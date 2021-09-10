import styled from "styled-components";
import { colorPallete } from "../variables/ColorPallete";

export const FormContainer = styled.div`
    width: 400px;
    height: 100%;
    background-color: ${ colorPallete.dark_blue };
`

export const Container = styled.div`
    width: auto;
    height: 100%;
    padding: 28px;
`

export const Logo = styled.div`
    height: 40px;
    margin-bottom: 88px;
    color: white;
    font-size: 28px;
    text-align: center;

    span {
        font-weight: 700;
    }
`

const formGeneric = `
    font-size: 14px;
    background-color: white;
    color: ${ colorPallete.light_gray };
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
`

export const FormGroup = styled.div`
    display: ${props => props.grid ? "grid" : "block"};
    grid-template-columns: repeat(2,1fr);
    column-gap: 16px;
    margin-bottom: 16px;

    > div {
        position: relative;

        > svg {
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translateY(-50%);
            z-index: 1;
            color: ${ colorPallete.light_gray };
        }
    }

    .react-datepicker__input-container input {
        ${ formGeneric }
        height: 40px;
    }
`

export const Input = styled.input`
    ${ formGeneric }
    width: 100%;
    height: 40px;
`

export const TextArea = styled.textarea.attrs(props => ({
    placeholder: props.placeholder
}))`
    ${ formGeneric }
    min-width: 100%;
    max-width: 100%;
    min-height: 100px;
    max-height: 150px;
    font-family: 'Nunito Sans', sans-serif;
`

export const Select = styled.select`
    ${ formGeneric }
    height: 40px;
    width: ${ props => props.width ? props.width : "100%" };
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
`

export const ButtonWrapper = styled.div`
    display: grid;
    column-gap: 16px;
    grid-template-columns: repeat(2,1fr);
    margin-top: 59px;
`

export const Button = styled.button.attrs(props => ({
    disabled: props.isDisabled
}))`
    width: 140px;
    height: 48px;
    opacity: ${ props => props.isDisabled ? ".7" : "1" };
    pointer-events: ${ props => props.isDisabled ? "none" : "auto" };
    margin-left: ${ props => props.align === "right" ? "auto" : 0 };
    margin-right: ${ props => props.align === "left" ? "auto" : 0 };
    padding: 13px 0;
    border: none;
    border-radius: 32px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: ${ props => colorPallete[props.color] };
    transition: color .5s, background-color .5s;

    &:hover {
        background-color: white;
        color: black;
    }
`