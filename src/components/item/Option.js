import React from 'react';
import PropTypes from "prop-types";
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

Option.propTypes = {
    id: PropTypes.string,
    showDetail: PropTypes.bool,
    showOption: PropTypes.bool,
    isDeleted: PropTypes.bool,
    OnHandleUpdateTargetItem: PropTypes.func,
}

export default onClickOutside(Option, clickOutsideConfig);
