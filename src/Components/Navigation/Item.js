import React from 'react';
import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { 
    ItemWrapper, CheckListWrapper, ItemHeader, 
    ItemBody, Button, InformationWrapper, Title, 
    DateTime, PriorityType, OptionWrapper, OptionButton, 
    DateWrapper, Description, CloseDetailButton,
    OptionModal, OptionList } from './Item.styled';


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
                <OptionModal>
                    <OptionList>
                        <li>
                            <button onClick={ () => handleUpdateTargetItem(props.id, "show_detail", props.showDetail) }>Detail</button>
                        </li>
                        <li>
                            <button onClick={ () => handleUpdateTargetItem(props.id, "is_deleted", props.isDeleted) }>Delete</button>
                        </li>
                    </OptionList>
                </OptionModal>
            )
        }
    }

    const renderDetail = () => {
        if(props.showDetail) {
            return (
                <ItemBody>
                    <Description>
                        { props.description.length > 0 ? props.description : "No detail for this task" }
                    </Description>
                    <CloseDetailButton onClick={ () => handleUpdateTargetItem(props.id, "show_detail", props.showDetail) }>
                        <AiOutlineClose />
                    </CloseDetailButton>
                </ItemBody>
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
