import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCaretDown, AiFillCalendar } from "react-icons/ai";
import { 
    FormContainer, Container, Logo, 
    FormGroup, Input, TextArea, Select,
    ButtonWrapper, Button } from "./Form.styled";


function Form(props) {

    const prefixKey = "priority";
    const priority = [
            [1, "Low"], 
            [2, "Medium"], 
            [3 ,"High"]
        ];

    const handleTitleChange = (e) => {
        props.onFormChange("title", e.target.value);
        e.preventDefault();
    }   

    const handlePriorityChange = (e) => {
        props.onFormChange("priority", parseInt(e.target.value));
    }

    const handleDueDateChange = (date) => {
        props.onFormChange("due_date", date);
    }

    const handleDescriptionChange = (e) => {
        props.onFormChange("description", e.target.value);
    }

    const handleSubmit = (e) => {
        props.onAddItem(e);
        e.preventDefault();
    }

    return (
        <FormContainer onSubmit={ handleSubmit }>
            <Container>
                <Logo><span>Todo</span>-list</Logo>
                <div>
                    <form>
                        <FormGroup>
                            <Input 
                                type="text" 
                                name="title" 
                                placeholder="Enter task title" 
                                maxLength="100"
                                value={ props.formTitle }
                                onChange={ handleTitleChange }></Input>
                        </FormGroup>
                        <FormGroup grid>
                            <div>
                                <AiOutlineCaretDown/>
                                <Select value={ props.formPriority } onChange={ handlePriorityChange }>
                                    {
                                        priority.map((value, index) => {
                                            return <option key={ prefixKey.concat(index) } value={ value[0] }>{ value[1] }</option>
                                        })
                                    }
                                </Select>
                            </div>
                            <div>
                                <AiFillCalendar/>
                                <DatePicker
                                    selected={ props.formDueDate } 
                                    onChange={ handleDueDateChange } />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <TextArea 
                                name="description" 
                                placeholder="Enter task description" 
                                rows="7"
                                maxLength="255"
                                value={ props.formDescription }
                                onChange={ handleDescriptionChange }></TextArea>
                        </FormGroup>
                        <ButtonWrapper>
                            <Button 
                                isDisabled = { props.formSubmitDisabled ? "disabled" : '' }
                                color="yellow" 
                                align="right" 
                                type="submit" 
                                value="submit">Submit</Button>
                            <Button 
                                color="blue" 
                                align="left"
                                type="button"
                                onClick={ () => props.onResetForm() }>Cancel</Button>
                        </ButtonWrapper>
                    </form>
                </div>
            </Container>
        </FormContainer>
    )
}

Form.propTypes = {
    formTitle: PropTypes.string,
    formPriority: PropTypes.number,
    formDueDate: PropTypes.instanceOf(Date),
    formDescription: PropTypes.string,
    toggleOption: PropTypes.bool,
    toggleDetail: PropTypes.bool,
    itemList: PropTypes.array,
    onFormChange: PropTypes.func,
    onResetForm: PropTypes.func,
    onAddItem: PropTypes.func,
    formSubmitDisabled: PropTypes.bool
}

export default Form;
