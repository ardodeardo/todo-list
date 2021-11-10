import React, { Component } from "react";
import GlobalStyle from "./layout/Base.styled";
import Todo from "./layout/Todo.styled";
import Container from "./layout/Container.styled";
import { RequestShowOnDevice } from "./components/RequestShowOnDevice.styled";
import Form from "./components/Form";
import Filter from './components/control/Filter';
import { NavigationContainer } from "./components/Navigation.styled";

import Item from './components/item/Item';
import { 
    ListContainer, ArchiveTitle, 
    Empty, FeedbackImage } from './components/List.styled';

import { debounce } from "lodash";
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
            filter_search_by: "",
            debounce_filter_search_by: ""
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
        this.setFilterSearchDebounce = debounce(this.setFilterSearchDebounce.bind(this), 300);
    }

    componentDidMount() {

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

    componentDidUpdate(prevProps, prevState, sbnapShot) {
        if (prevState.items !== this.state.items) {
            window.localStorage.setItem("items", JSON.stringify(this.state.items));
        }
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

    handleResetForm() {
        this.setState({
            title: "",
            priority: 2,
            due_date: new Date(),
            description: "",
            form_submit_disabled: true
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
                    items: prevState.items.concat(newItem)
                };
            }, () => {
                this.handleResetForm();
                this.handleNotification("insert", "Task added");
            });
            
            e.preventDefault();
        }
    };

    setFilterSearchDebounce() { 
        this.setState({ debounce_filter_search_by: this.state.filter_search_by }); 
    }

    handleFilterChange (item, value) {
        this.setState({ [item]: value }, () => {
            if (item === 'filter_search_by') { 
                this.setFilterSearchDebounce(value);
            }
        });
    }

    handleUpdateItem(id, itemObject, value) {
        const allItems = [...this.state.items];
        const findById = allItems.filter((item) => item.id === id);
        const getArrayIndex = allItems.findIndex((item) => item.id === id);
        const targetItem = { ...findById[0] };
        targetItem[itemObject] = value;

        if(itemObject === "show_detail" || itemObject === "is_deleted") {
            // auto close the option card
            targetItem.show_option = false;
        } else if (itemObject === "is_complete") {
            // auto close detail tray
            targetItem.show_detail = false;
        }

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
    
    handleEmptyOrNotFoundItem = ({ img, description }) => {
        return (
            <Empty>
                <FeedbackImage 
                    src={ img }></FeedbackImage>
                    <p>{ description }</p>
            </Empty> 
        )
    }

    getListByFilter(isComplete) {
        const { items, filter_sort_by, debounce_filter_search_by } = this.state; 
        
        let getList = 
            debounce_filter_search_by.length > 2 
            ?
            items.filter(obj => obj.is_complete === isComplete && obj.is_deleted === false && obj.title.toLowerCase().indexOf(debounce_filter_search_by.toLowerCase()) >= 0)
            :
            items.filter(obj => obj.is_complete === isComplete && obj.is_deleted === false);

        // check by priority
        getList =
            filter_sort_by === 3 
            ? 
            getList.sort((a, b) => b.priority - a.priority || a.due_date - b.due_date)
            : 
            getList.sort((a, b) => a.priority - b.priority || a.due_date - b.due_date);

        return getList;
    }

    renderListItem() {
        const { items, debounce_filter_search_by } = this.state;
        const emptyOrNotFoundTemplate = {
            empty: {
                img: "https://lelogama.go-jek.com/prime/upload/image/Creative_Labs_wins_Media_Agency_of_the_Year.svg",
                description: "Pertukangan belum ada Proyek lagi!"
            },
            notFound: { 
                img: "https://lelogama.go-jek.com/cache/c0/ef/c0efd340479bded453731c7ef1b2d8f0.webp",
                description: "Ga nemu bro yang dicari!"
            }
        }

        if (items.length > 0) {
            let inProgressItems = this.getListByFilter(false);
            let completedItems = this.getListByFilter(true);

            const inProgressFound = inProgressItems.length > 0 ? true : false;
            const archiveFound = completedItems.length > 0 ? true : false;

            let inProgressTemp;
            let completedTemp;

            if(inProgressItems.length > 0) {
                inProgressTemp = 
                    <div key="inprogresslistcontainer">
                    {
                        inProgressItems.map(item => {
                            const dateFormat = item.due_date.toDateString();

                            return <Item
                                key={ item.id }
                                id={ item.id }
                                title={ item.title }
                                priority={ item.priority }
                                dueDate={ dateFormat }
                                description={ item.description }
                                isComplete={ item.is_complete }
                                showOption={ item.show_option }
                                showDetail={ item.show_detail }
                                isDeleted={ item.is_deleted }
                                onChangeTargetItem={ this.handleUpdateItem }
                                ></Item>
                        })
                    }
                    </div>
            } 

            if(completedItems.length > 0) {
                completedTemp = 
                    <div key="archivelistcontainer">
                        <ArchiveTitle>Task Archive</ArchiveTitle>
                        {
                            completedItems.map(item => {
                                const dateFormat = item.due_date.toDateString();

                                return <Item
                                    key={ item.id }
                                    id={ item.id }
                                    title={ item.title }
                                    priority={ item.priority }
                                    dueDate={ dateFormat }
                                    description={ item.description }
                                    isComplete={ item.is_complete }
                                    showOption={ item.show_option }
                                    showDetail={ item.show_detail }
                                    isDeleted={ item.is_deleted }
                                    onChangeTargetItem={ this.handleUpdateItem }
                                    ></Item>
                            })
                        }
                    </div>
            }

            let finalResult;
            // empty by filter or just empty
            const isEmptyOrNotFound = debounce_filter_search_by.length > 2 ? {...emptyOrNotFoundTemplate.notFound} : {...emptyOrNotFoundTemplate.empty}

            if (!inProgressFound && !archiveFound) {
                finalResult = this.handleEmptyOrNotFoundItem(isEmptyOrNotFound);
            }
            else if (!inProgressFound){
                finalResult = [
                    this.handleEmptyOrNotFoundItem(isEmptyOrNotFound),
                    inProgressTemp,
                    completedTemp
                ];
            }
            else {
                finalResult = [inProgressTemp,completedTemp];
            }

            return finalResult;
            
        } else {
            // first load
            return this.handleEmptyOrNotFoundItem({...emptyOrNotFoundTemplate.empty});
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
                <RequestShowOnDevice>
                    <img src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/96a034beedb086d.png" alt="computer pixel art"/>
                    <h1>Please preview on desktop :)</h1>
                </RequestShowOnDevice>
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
                    <NavigationContainer>
                        <Filter 
                            filterSortBy={filter_sort_by}
                            filterSearchBy={filter_search_by}
                            onHandleFilterChange={this.handleFilterChange}></Filter>
                        <ListContainer>
                            { this.renderListItem() }
                        </ListContainer>
                    </NavigationContainer>
                </Container>
            </Todo>
        );
    }
}

export default App;
