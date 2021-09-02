import React from 'react';
import { NavigationContainer } from "./Navigation.styled";
import Filter from './Navigation/Filter';
import List from './Navigation/List';

export default function Navigation(props) {

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
