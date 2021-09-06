import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Option from './Item/Option';
import Body from './Item/Body';
import { 
    ItemWrapper, CheckListWrapper, ItemHeader, 
    Button, InformationWrapper, Title, 
    DateTime, PriorityType, OptionWrapper, OptionButton, 
    DateWrapper } from './Item.styled';


export default function Item(props) {

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
                    OnHandleUpdateTargetItem={ handleUpdateTargetItem }></Body>
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
                <InformationWrapper>
                    <Title>{ props.title }</Title>
                    <DateWrapper>
                        <DateTime 
                            dateTime={ props.dueDate }>{ props.dueDate }</DateTime>
                        <PriorityType 
                            color={ priorityLevel[props.priority].color }>{ priorityLevel[props.priority].text }</PriorityType>
                    </DateWrapper>    
                </InformationWrapper>
                <OptionWrapper>
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
