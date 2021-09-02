import styled from "styled-components";
import { colorPallete } from "../../Layout/ColorPallete";


export const ItemWrapper = styled.div`
    border: 1px solid ${ colorPallete.dark_blue };
    border-radius: 8px;
    /* max-height: 64px; */
    transition: .5s;
    margin-bottom: 16px;

    /* &.show-detail {
        max-height: 500px;
    } */
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

export const ItemBody = styled.div`
    position: relative;
    border-top: 1px;
    border-style: solid;
    border-color: ${ colorPallete.dark_blue };
    padding: .1px;
`

export const Description = styled.p`
    width: 402px;
    font-size: 12px;
    line-height: 1.4;
    color: ${ colorPallete.light_gray };
    margin: 14px 16px;
`

export const OptionWrapper  = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    padding-right: 12px;
`

export const CloseDetailButton = styled.button`
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
    }
`

export const OptionButton = styled.button`
    background-color: transparent;
    border: 1px dashed white;
    padding: 0 4px;

    &:hover {
        border-color: ${ colorPallete.dark_blue };
    }

    svg {
        font-size: 32px;
    }
`

export const OptionModal = styled.div`
    position: absolute;
    bottom: -24px;
    left: -27px;
    background-color: white;
    z-index: 2;
    border: 1px solid ${ colorPallete.light_gray };
    border-radius: 4px;
    overflow: hidden;
`

export const OptionList = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        display: inline-block;
        overflow: hidden;

        font-size: 12px;
        color: ${ colorPallete.dark_blue };

        button {
            padding: 4px 12px;
            width: 100%;
            border: none;
            background-color: white;
            font-size: 12px;
            color: ${ colorPallete.dark_blue };
            transition: color .3s, background-color .3s;

            &:hover {
                background-color: black;
                color: white;
            }
        }
    }
`