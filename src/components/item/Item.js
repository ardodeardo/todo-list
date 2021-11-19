import React, { Component } from 'react';

import { ItemBody, Description, CloseDetailButton } from './Body.styled';
import { OptionModal, OptionList } from './Option.styled';
import { 
    ItemWrapper, CheckListWrapper, ItemHeader, 
    Button, InformationWrapper, Title, 
    DateTime, PriorityType, OptionWrapper, 
    OptionButton, DateWrapper 
} from './Item.styled';

import { AiFillCheckCircle, AiOutlineClose } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

class Item extends Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.handleUpdateTargetItem = this.handleUpdateTargetItem.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside.bind(this), true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    };

    handleUpdateTargetItem(id, itemObject, value) {
        if (typeof value === "boolean") {
            value = !value;
        }
        
        this.props.onChangeTargetItem(id, itemObject, value);
    }

    handleClickOutside(event) {
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            console.log('close please')
            this.handleUpdateTargetItem(this.props.id, "show_option", this.props.showOption);
        }
    }
    formatDate(date) {
        const objDate = new Date(date);
        const monthInYear= [
            "January", "February", "March", "April", 
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ];
        
        const leadingZeroMonth = objDate.getMonth() < 10 ? `0${ objDate.getMonth() }` : objDate.getMonth();
        const leadingZeroDate = objDate.getDate() < 10 ? `0${ objDate.getDate() }` : objDate.getDate();

        const arr = [
            `${ objDate.getFullYear() }-${ leadingZeroMonth }-${ leadingZeroDate }`,
            `${ objDate.getDate() } ${ monthInYear[objDate.getMonth() + 1].substring(0, 3) } ${ objDate.getFullYear() }`
        ];

        return arr;
    }

    renderOption() {
        if (this.props.showOption) {
            return (
                <OptionModal ref={ this.ref }>
                    <OptionList>
                        <li>
                            <button 
                                onClick={ () => this.handleUpdateTargetItem(this.props.id, "show_detail", this.props.showDetail) }>
                                Detail
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={ () => this.handleUpdateTargetItem(this.props.id, "is_deleted", this.props.isDeleted) }>
                                Delete
                            </button>
                        </li>
                    </OptionList>
                </OptionModal>
            )
        }
    }

    renderDetail() {
        if (this.props.showDetail) {
            return (
                <ItemBody completedItem={ this.props.isComplete }>
                    <Description>
                        { this.props.description.length > 0 ? this.props.description : "No detail for this task" }
                    </Description>
                    <CloseDetailButton 
                        onClick={ () => this.handleUpdateTargetItem(this.props.id, "show_detail", this.props.showDetail) }>
                        <AiOutlineClose />
                    </CloseDetailButton>
                </ItemBody>
            )
        }
    }

    render() {
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

        return (
            <div>
                <ItemWrapper
                    completedItem={ this.props.isComplete }>
                    <ItemHeader>
                        <CheckListWrapper completedItem={ this.props.isComplete }>
                            <Button 
                                status={ this.props.isComplete } 
                                onClick={ () => this.handleUpdateTargetItem(this.props.id, "is_complete", this.props.isComplete) }>
                                <AiFillCheckCircle />
                            </Button>
                        </CheckListWrapper>
                        <InformationWrapper 
                            completedItem={ this.props.isComplete }>
                            <Title>{ this.props.title }</Title>
                            <DateWrapper>
                                <DateTime 
                                    dateTime={ this.props.dueDate }>{ this.formatDate(this.props.dueDate)[1] }</DateTime>
                                <PriorityType 
                                    color={ priorityLevel[this.props.priority].color }>{ priorityLevel[this.props.priority].text }</PriorityType>
                            </DateWrapper>    
                        </InformationWrapper>
                        <OptionWrapper 
                            completedItem={ this.props.isComplete }
                            isShowingDetail={ this.props.showDetail }>
                            <OptionButton
                                onClick={ () => this.handleUpdateTargetItem(this.props.id, "show_option", this.props.showOption) }>
                                <BsThreeDots />
                            </OptionButton>
                            { this.renderOption() }
                        </OptionWrapper>
                    </ItemHeader>
                    { this.renderDetail() }
                </ItemWrapper>
            </div>
        )
    }
}

// Item.propTypes = {
//     id: PropTypes.string,
//     title: PropTypes.string,
//     priority: PropTypes.number,
//     dueDate: PropTypes.string,
//     description: PropTypes.string,
//     isComplete: PropTypes.bool,
//     showOption: PropTypes.bool,
//     showDetail: PropTypes.bool,
//     isDeleted: PropTypes.bool,
//     onChangeTargetItem: PropTypes.func
// }

export default Item;
