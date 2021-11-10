import styled from "styled-components";
import { colorPallete } from "../../variables/ColorPallete";


export const ItemWrapper = styled.div`
    border: 1px solid ${ props => props.completedItem ? colorPallete.dark_gray : colorPallete.blue };
    border-radius: 8px;
    margin-bottom: 16px;
`

export const CheckListWrapper = styled.div`
    flex: 0 1 auto;
    width: 48px;
    display: grid;
    place-content: center;
    border-right: 1px solid ${ props => props.completedItem ? colorPallete.dark_gray : colorPallete.blue };
`

export const ItemHeader = styled.div`
    min-height: 64px;
    display: flex;

`

export const InformationWrapper = styled.div`
    position: relative;
    flex: 1 1 auto;
    padding: 11px 14px;
    background-color: ${ props => props.completedItem ? colorPallete.shade_gray : "white" };
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
    border: 1px solid ${ props => props.status ? colorPallete.dark_blue : colorPallete.light_gray };
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
        transform: ${ props => props.status ? "scale(1.2)" : "scale(0)" };
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

export const OptionWrapper  = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    padding-right: 12px;
    background-color: ${ props => props.completedItem ? colorPallete.shade_gray : "white" };
    border-top-right-radius: 8px;
    border-bottom-right-radius: ${ props => props.isShowingDetail ? "0" : "8px" };
`

export const OptionButton = styled.button`
    background-color: transparent;
    border: 1px dashed transparent;
    padding: 0 4px;

    &:hover {
        border-color: ${ colorPallete.dark_blue };
    }

    svg {
        font-size: 32px;
    }
`