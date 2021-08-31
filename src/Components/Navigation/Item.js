import React from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { 
    ItemWrapper, CheckListWrapper, ItemHeader, 
    ItemBody, Button, InformationWrapper, Title, 
    DateTime, PriorityType, OptionWrapper, OptionButton, DateWrapper } from './Item.styled';


export default function Item() {

    
    return (
        <ItemWrapper>
            <ItemHeader>
                <CheckListWrapper>
                    <Button>
                        <AiFillCheckCircle />
                    </Button>
                </CheckListWrapper>
                <InformationWrapper>
                    <Title>Task Title</Title>
                    <DateWrapper>
                        <DateTime 
                            dateTime="2021-09-01">1 Sept 2021</DateTime>
                        <PriorityType 
                            color="red">High</PriorityType>
                    </DateWrapper>    
                </InformationWrapper>
                <OptionWrapper>
                    <OptionButton>
                        <BsThreeDots />
                    </OptionButton>
                </OptionWrapper>
            </ItemHeader>
            {/* <ItemBody>
                description
            </ItemBody> */}
        </ItemWrapper>
    )
}
