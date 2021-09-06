import React from 'react';
import { OptionModal, OptionList } from './Option.styled';
import onClickOutside from "react-onclickoutside";

function Option(props){
    
    Option.handleClickOutside = () => props.OnHandleUpdateTargetItem(props.id, "show_option", props.showOption);

    return (
        <OptionModal>
            <OptionList>
                <li>
                    <button onClick={ () => props.OnHandleUpdateTargetItem(props.id, "show_detail", props.showDetail) }>Detail</button>
                </li>
                <li>
                    <button onClick={ () => props.OnHandleUpdateTargetItem(props.id, "is_deleted", props.isDeleted) }>Delete</button>
                </li>
            </OptionList>
        </OptionModal>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Option.handleClickOutside
};

export default onClickOutside(Option, clickOutsideConfig);
