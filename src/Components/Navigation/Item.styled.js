import styled from "styled-components";
import { colorPallete } from "../../Layout/ColorPallete";


export const ItemWrapper = styled.div`
    border: 1px solid ${ colorPallete.dark_blue };
    border-radius: 8px;
    transition: height .5s;
`

export const CheckListWrapper = styled.div`
    flex: 0 1 auto;
    width: 48px;
    display: grid;
    place-content: center;
    border-right: 1px solid ${ colorPallete.dark_blue };
`

export const ItemHeader = styled.div`
    min-height: 64px;
    display: flex;

`

export const InformationWrapper = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 11px 14px;
`

export const Title = styled.h3`
    color: ${ colorPallete.dark_blue };
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 16px;

`

export const Button = styled.button`
    position: relative;
    background-color: white;
    border: 1px solid ${ colorPallete.light_gray };
    border-radius: 50%;
    height: 22px;
    width: 22px;
    padding: 0;
    overflow: hidden;

    svg {
        font-size: 22px;
        position: absolute;
        top: -1px;
        left: -1px;
        transform: scale(1.2);
        transform-origin: center;
        transition: transform .3s;
    }
`

export const DateWrapper = styled.div`
    display: flex;
`

export const DateTime = styled.time`
    align-self: center;
    font-size: 10px;
    color: ${ colorPallete.light_gray };
`

export const PriorityType = styled.div`
    display: grid;
    place-content: center;
    width: 52px;
    height: 16px;
    color: white;
    background-color: ${ props => props.color ? colorPallete[props.color] : "black" };
    font-size: 8px;
    border-radius: 8px;
    margin-left: 20px;
` 

export const ItemBody = styled.div`
`

export const OptionWrapper  = styled.div`
    display: grid;
    place-content: center;
    padding-right: 12px;
`


export const OptionButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 0 4px;

    svg {
        font-size: 32px;
    }
`