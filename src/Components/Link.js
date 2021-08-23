import React from 'react';
import LinkStyled from "./Link.styled";
import PropTypes from 'prop-types';

const Link = (props) => {

    const handleUpdateLabel = () => {
        props.OnHandleUpdateLabel('yuhuu')
    }

    return (
        <LinkStyled 
            className={ props.className }
            onClick={ handleUpdateLabel }
        >
            { props.linkLabel }</LinkStyled>
    );
}

Link.propTypes = {
    linkLabel: PropTypes.string,
    url: PropTypes.string,
    OnHandleUpdateLabel: PropTypes.func
};

export default Link;

