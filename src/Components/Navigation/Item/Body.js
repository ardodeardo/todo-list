import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { ItemBody, Description, CloseDetailButton } from './Body.styled';

export default function Body(props) {

    return (
        <ItemBody>
            <Description>
                { props.description.length > 0 ? props.description : "No detail for this task" }
            </Description>
            <CloseDetailButton onClick={ () => props.OnHandleUpdateTargetItem(props.id, "show_detail", props.showDetail) }>
                <AiOutlineClose />
            </CloseDetailButton>
        </ItemBody>
    )
}
