import React, { Component } from "react";
import GlobalStyle from "./Layout/Base.styled";
import Todo from "./Layout/Todo.styled";
import Container from "./Layout/Container.styled";
import Form from "./Components/Form";
import Navigation from "./Components/Navigation";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
    constructor(props) {
        super(props);

        const form = {
            id: "",
            title: "",
            priority: 2,
            due_date: new Date(),
            description: "",
            is_complete: false,
            is_deleted: false,
            show_detail: false,
            show_option: false,
            form_submit_disabled: true,
        }

        const filter = {
            filter_sort_by: 0,
            filter_search_by: ""
        }

        this.state = {
            ...form,
            ...filter,
            items: [],
        };

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.formValidation = this.formValidation.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    formValidation() {
        let formNeedToDisabled = true;
        const { title, description } = this.state;
        const validate = {
            title: false,
            description: false
        }

        if(title.length > 0 && title.length <= 100) {
            validate.title = true;
        }

        if(description.length > 0 && description.length <= 255) {
            validate.description = true;
        }

        if(validate.title && validate.description) {
            formNeedToDisabled = false;
        }

        this.setState({ form_submit_disabled: formNeedToDisabled });
    }

    handleFormChange(item, value) {
        this.setState({ [item]: value }, () => {
            this.formValidation();
        });
    }

    handleInsertNewItem = (e) => {

        if(!this.state.form_submit_disabled){
            let newItem = {
                id: uuidv4(),
                title: this.state.title,
                priority: this.state.priority,
                due_date: this.state.due_date,
                description: this.state.description,
                is_complete: this.state.is_complete,
                show_detail: this.state.show_detail,
                show_option: this.state.show_option,
                is_deleted: this.state.is_deleted,
            };
    
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem),
                };
            });
    
            e.preventDefault();
        }
    };

    handleResetForm() {
        this.setState({
            title: "",
            priority: 2,
            due_date: new Date(),
            description: "",
            form_submit_disabled: true
        });
    }

    handleFilterChange(item, value) {
        this.setState({ [item]: value });
    }

    handleItemChange(id, itemObject, value) {
        const allItems = [...this.state.items];
        const findById = allItems.filter((item) => item.id === id);
        const getArrayIndex = allItems.findIndex((item) => item.id === id);
        const targetItem = { ...findById[0] };
        targetItem[itemObject] = value;
        allItems[getArrayIndex] = targetItem;
        this.setState({ items: allItems });
    }

    render() {
        const {
            title,
            priority,
            due_date,
            description,
            items,
            show_detail,
            show_option,
            form_submit_disabled,
            filter_sort_by,
            filter_search_by,
        } = this.state;

        return (
            <Todo>
                <GlobalStyle />
                <Container>
                    <Form
                        formTitle={title}
                        formPriority={priority}
                        formDueDate={due_date}
                        formDescription={description}
                        toggleOption={show_option}
                        toggleDetail={show_detail}
                        itemList={items}

                        onFormChange={this.handleFormChange}
                        onResetForm={this.handleResetForm}
                        onAddItem={this.handleInsertNewItem}
                        formSubmitDisabled={form_submit_disabled}
                    ></Form>
                    <Navigation
                        itemList={items}
                        onChangeTargetItem={this.handleItemChange}
                        onHandleFilterChange={this.handleFilterChange}
                        filterSortBy={ filter_sort_by }
                        filterSearchBy={ filter_search_by }
                    ></Navigation>
                </Container>
            </Todo>
        );
    }
}

export default App;
