import React from 'react';
import { NavigationContainer } from "./Navigation.styled";
import Filter from './Navigation/Filter';
import List from './Navigation/List';

export default function Navigation() {
    return (
        <NavigationContainer>
            <Filter></Filter>
            <List></List>
        </NavigationContainer>
    )
}
