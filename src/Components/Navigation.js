import React from 'react';
import PropTypes from "prop-types";
import { NavigationContainer } from "./Navigation.styled";
import Filter from './Navigation/Filter';
import List from './Navigation/List';

function Navigation(props) {

    return (
        <NavigationContainer>
            <Filter 
                filterSortBy={ props.filterSortBy }
                filterSearchBy={ props.filterSearchBy }
                onHandleFilterChange={ props.onHandleFilterChange }></Filter>
            <List
                filterSortBy={ props.filterSortBy }
                filterSearchBy={ props.filterSearchBy }
                itemList={ props.itemList }
                onChangeTargetItem = { props.onChangeTargetItem } 
                ></List>
        </NavigationContainer>
    )
}

Navigation.propTypes = {
    itemList: PropTypes.array,
    onChangeTargetItem: PropTypes.func,
    onHandleFilterChange: PropTypes.func,
    filterSortBy: PropTypes.number,
    filterSearchBy: PropTypes.string
}

export default Navigation;

