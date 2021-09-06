import React, { Component } from "react";
import GlobalStyle from "./Layout/Base.styled";
import Todo from "./Layout/Todo.styled";
import Container from "./Layout/Container.styled";
import Form from "./Components/Form";
import Navigation from "./Components/Navigation";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    constructor(props) {
        super(props);

        const itemMainStructure = {
            id: "",
            title: "",
            priority: 2,
            due_date: new Date(),
            description: "",
            is_complete: false,
            is_deleted: false,
            show_detail: false,
            show_option: false,
        }

        const form = {
            ...itemMainStructure,
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
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.formValidation = this.formValidation.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        // console.log("component did mount");
        const isLocalStorageAvailable = window.localStorage.length > 0 ? JSON.parse(window.localStorage.getItem("items")) : false;

        if(isLocalStorageAvailable) {
            const itemList = isLocalStorageAvailable.map(item => {
                let formattedObj = {...item}
                formattedObj.due_date = new Date(item.due_date)
                return formattedObj;
            });
            this.setState({ items: itemList });
        }
    }

    componentDidUpdate() {
        // console.log("component did update");
        window.localStorage.setItem("items", JSON.stringify(this.state.items));
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
            this.handleNotification("insert", "Task added")
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

    handleUpdateItem(id, itemObject, value) {
        const allItems = [...this.state.items];
        const findById = allItems.filter((item) => item.id === id);
        const getArrayIndex = allItems.findIndex((item) => item.id === id);
        const targetItem = { ...findById[0] };
        targetItem[itemObject] = value;
        allItems[getArrayIndex] = targetItem;

        this.setState({ items: allItems }, () => {
            if(itemObject === "is_deleted" && value === true) {
                this.handleNotification("remove", "Task removed");
            } else if(itemObject === "is_complete" && value === true) {
                this.handleNotification("complete", "Awesome! Task is complete");
            }
        });
    }

    handleNotification(type, text) {
        switch (type) {
            case "insert":
                toast.success(text, {
                    icon: "🚀",
                    theme: "colored"
                });
                break;
            case "remove":
                toast.error(text, {
                    theme: "colored"
                });
                break;
            case "complete":
                toast(text, {
                    icon: "🦄",
                    theme: "light"
                });
                break;
            default:
                break;
        }
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
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={true} />
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
                        onChangeTargetItem={this.handleUpdateItem}
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
