import React from 'react';
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { ItemBody, Description, CloseDetailButton } from './Body.styled';

function Body(props) {

    return (
        <ItemBody completedItem={ props.isComplete }>
            <Description>
                { props.description.length > 0 ? props.description : "No detail for this task" }
            </Description>
            <CloseDetailButton onClick={ () => props.OnHandleUpdateTargetItem(props.id, "show_detail", props.showDetail) }>
                <AiOutlineClose />
            </CloseDetailButton>
        </ItemBody>
    )
}

Body.propTypes = {
    id: PropTypes.string,
    description: PropTypes.string,
    showDetail: PropTypes.bool,
    isComplete: PropTypes.bool,
    OnHandleUpdateTargetItem: PropTypes.func
}

export default Body;
