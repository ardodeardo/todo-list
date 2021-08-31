import React, { useState } from 'react';
import { 
    FormContainer, Container, Logo, 
    FormGroup, Input, TextArea, Select,
    ButtonWrapper, Button } from "./Form.styled";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCaretDown, AiFillCalendar } from "react-icons/ai";


export default function Form() {

    const prefixKey = "priority";
    const priority = ["Low", "Medium", "High"];
    const [startDate, setStartDate] = useState(new Date());

    return (
        <FormContainer> 
            <Container>
                <Logo><span>Todo</span>-list</Logo>
                <div>
                    <form>
                        <FormGroup>
                            <Input 
                                type="text" 
                                name="title" 
                                placeholder="Enter task title" 
                                maxLength="100"></Input>
                        </FormGroup>
                        <FormGroup grid>
                            <div>
                                <AiOutlineCaretDown/>
                                <Select>
                                    {
                                        priority.map((value, index) => {
                                            return <option key={ prefixKey.concat(index) }>{ value }</option>
                                        })
                                    }
                                </Select>
                            </div>
                            <div>
                                <AiFillCalendar/>
                                <DatePicker 
                                    selected={startDate} 
                                    onChange={(date) => setStartDate(date)} />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <TextArea 
                                name="description" 
                                placeholder="Enter task description" 
                                rows="7"></TextArea>
                        </FormGroup>
                        <ButtonWrapper>
                            <Button 
                                color="yellow" 
                                align="right" 
                                type="submit" 
                                value="submit">Submit</Button>
                            <Button 
                                color="blue" 
                                align="left">Cancel</Button>
                        </ButtonWrapper>
                    </form>
                </div>
            </Container>
        </FormContainer>
    )
}
