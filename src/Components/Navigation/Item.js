import React from 'react';
import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Option from './Item/Option';
import Body from './Item/Body';
import { 
    ItemWrapper, CheckListWrapper, ItemHeader, 
    Button, InformationWrapper, Title, 
    DateTime, PriorityType, OptionWrapper, OptionButton, 
    DateWrapper } from './Item.styled';


function Item(props) {

    const priorityLevel = [
        null,
        {
            color: "dark_blue",
            text: "Low"
        },
        {
            color: "yellow",
            text: "Medium"
        },
        {
            color: "red",
            text: "High"
        }
    ];

    const handleUpdateTargetItem = (id, itemObject, value) => {

        if (typeof value === "boolean") {
            value = !value;
        }
        props.onChangeTargetItem(id, itemObject, value);
    }

    const formatDate = (date) => {
        const objDate = new Date(date);
        const monthInYear= [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        
        const leadingZeroMonth = objDate.getMonth() < 10 ? `0${ objDate.getMonth() }` : objDate.getMonth();
        const leadingZeroDate = objDate.getDate() < 10 ? `0${ objDate.getDate() }` : objDate.getDate();

        const arr = [
            `${ objDate.getFullYear() }-${ leadingZeroMonth }-${ leadingZeroDate }`,
            `${ objDate.getDate() } ${ monthInYear[objDate.getMonth() + 1].substring(0, 3) } ${ objDate.getFullYear() }`
        ];

        return arr;
    }

    const renderOption = () => {
        if(props.showOption) {
            return (
                <Option
                    id={ props.id }
                    showDetail={ props.showDetail }
                    showOption={ props.showOption }
                    isDeleted={ props.isDeleted }
                    OnHandleUpdateTargetItem={ handleUpdateTargetItem }
                    ></Option>
            )
        }
    }

    const renderDetail = () => {
        if(props.showDetail) {
            return (
                <Body
                    id={ props.id }
                    description={ props.description }
                    showDetail={ props.showDetail }
                    OnHandleUpdateTargetItem={ handleUpdateTargetItem }
                    ></Body>
            )
        }
    }

    return (
        <ItemWrapper>
            <ItemHeader>
                <CheckListWrapper>
                    <Button 
                        status={ props.isComplete } 
                        onClick={ () => handleUpdateTargetItem(props.id, "is_complete", props.isComplete) }>
                        <AiFillCheckCircle />
                    </Button>
                </CheckListWrapper>
                <InformationWrapper completedItem={ props.isComplete }>
                    <Title>{ props.title }</Title>
                    <DateWrapper>
                        <DateTime 
                            dateTime={ props.dueDate }>{ formatDate(props.dueDate)[1] }</DateTime>
                        <PriorityType 
                            color={ priorityLevel[props.priority].color }>{ priorityLevel[props.priority].text }</PriorityType>
                    </DateWrapper>    
                </InformationWrapper>
                <OptionWrapper 
                    completedItem={ props.isComplete }
                    isShowingDetail={ props.showDetail }>
                    <OptionButton
                        onClick={ () => handleUpdateTargetItem(props.id, "show_option", props.showOption) }
                        >
                        <BsThreeDots />
                    </OptionButton>
                    { renderOption() }
                </OptionWrapper>
            </ItemHeader>
            { renderDetail() }
        </ItemWrapper>
    )
}

Item.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    priority: PropTypes.number,
    dueDate: PropTypes.string,
    description: PropTypes.string,
    isComplete: PropTypes.bool,
    showOption: PropTypes.bool,
    showDetail: PropTypes.bool,
    isDeleted: PropTypes.bool,
    onChangeTargetItem: PropTypes.func
}

export default Item;
