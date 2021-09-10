import styled from "styled-components";
import { colorPallete } from "../../variables/ColorPallete";

export const ListContainer = styled.div`
    flex: 1 1 auto;
    padding: 32px;
    height: auto;
    overflow-y: auto;
`

export const ArchiveTitle = styled.h2`
    position: relative;
    font-size: 16px;
    color: ${ colorPallete.dark_blue };
    font-weight: bold;
    margin-top: 28px;
    margin-bottom: 34px;

    ::after {
        content: "";
        height: 1px;
        background-color: ${ colorPallete.dark_blue };
        width: 374px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
    }
`

export const Empty = styled.div`
    display: grid;
    place-content: center;
    height: 100%;

    p {
        text-align: center;
        color: ${ colorPallete.gray };
    }
`

export const FeedbackImage = styled.img`
    width: 70%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 42px;
`
