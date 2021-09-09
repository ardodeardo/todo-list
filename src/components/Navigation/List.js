import React from 'react';
import PropTypes from "prop-types";
import Item from './Item';
import { 
    ListContainer,
    ArchiveTitle, Empty, FeedbackImage } from './List.styled';

function List(props) {

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
    
    const handleEmptyOrNotFoundItem = ({ img, description }) => {
        return (
            <Empty>
                <FeedbackImage 
                    src={ img }></FeedbackImage>
                    <p>{ description }</p>
            </Empty> 
        )
    }

    const getListByFilter = (isComplete) => {
        const items = props.itemList;

        // check by search input
        let getList = 
            props.filterSearchBy.length > 2 ?
            items.filter(obj => obj.is_complete === isComplete && obj.is_deleted === false && obj.title.toLowerCase().indexOf(props.filterSearchBy.toLowerCase()) >= 0) :
            items.filter(obj => obj.is_complete === isComplete && obj.is_deleted === false);

        // check by priority
        getList =
            props.filterSortBy === 3 ? 
            getList.sort((a, b) => b.priority - a.priority || a.due_date - b.due_date) : 
            getList.sort((a, b) => a.priority - b.priority || a.due_date - b.due_date);

        return getList;
    }

    const renderListItem = () => {
        const items = props.itemList;

        if(items.length > 0) {
            let inProgressItems = getListByFilter(false);
            let completedItems = getListByFilter(true);

            const inProgressFound = inProgressItems.length > 0 ? true : false;
            const archiveFound = completedItems.length > 0 ? true : false;
            let inProgressTemp;
            let completedTemp;

            if(inProgressItems.length > 0) {
                inProgressTemp = 
                    <>
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
                                onChangeTargetItem={ props.onChangeTargetItem }
                                ></Item>
                        })
                    }
                    </>
            } 

            if(completedItems.length > 0) {
                completedTemp = 
                    <>
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
                                onChangeTargetItem={ props.onChangeTargetItem }
                                ></Item>
                        })
                    }
                    </>
            }

            // empty by filter or just empty
            const isEmptyOrNotFound = props.filterSearchBy.length > 2 ? {...emptyOrNotFoundTemplate.notFound} : {...emptyOrNotFoundTemplate.empty}
            
            if(!inProgressFound && !archiveFound) {
                return handleEmptyOrNotFoundItem(isEmptyOrNotFound);
            }
            else if(!inProgressFound){
                return [
                    handleEmptyOrNotFoundItem(isEmptyOrNotFound),
                    inProgressTemp,
                    completedTemp
                ];
            }
            else {
                return [inProgressTemp,completedTemp];
            }
            
        } else {
            // first load
            return handleEmptyOrNotFoundItem({...emptyOrNotFoundTemplate.empty});
        }
    }

    return (
        <ListContainer>
            { renderListItem() }
        </ListContainer>
    )
}

List.propTypes = {
    filterSortBy: PropTypes.number,
    filterSearchBy: PropTypes.string,
    itemList: PropTypes.array,
    onChangeTargetItem: PropTypes.func
}

export default List;
