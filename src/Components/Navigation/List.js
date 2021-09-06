import React from 'react';
import Item from './Item';
// import { v4 as uuidv4 } from 'uuid';
import { 
    ListContainer,
    ArchiveTitle, Empty, FeedbackImage } from './List.styled';

export default function List(props) {

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

    const renderListItem = () => {
        const items = props.itemList;

        if(items.length > 0) {
            let inProgressItems =
            props.filterSearchBy.length > 2 ?
                items.filter(obj => obj.is_complete !== true && obj.is_deleted === false && obj.title.toLowerCase().indexOf(props.filterSearchBy.toLowerCase()) >= 0) :
                items.filter(obj => obj.is_complete !== true && obj.is_deleted === false)

            inProgressItems = 
                props.filterSortBy === "3" ? 
                inProgressItems.sort((a, b) => b.priority - a.priority || a.due_date - b.due_date) : 
                inProgressItems.sort((a, b) => a.priority - b.priority || a.due_date - b.due_date);
            
            let completedItems = items.filter(obj => obj.is_complete === true && obj.is_deleted === false);
            completedItems = completedItems.sort((a, b) => a.due_date - b.due_date);

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

            if(!inProgressFound && !archiveFound) {
                return handleEmptyOrNotFoundItem({...emptyOrNotFoundTemplate.empty});
            }
            else if(!inProgressFound){
                console.log(props.filterSearchBy.length > 2);
                const isEmptyOrNotFound = props.filterSearchBy.length > 2 ? {...emptyOrNotFoundTemplate.notFound} : {...emptyOrNotFoundTemplate.empty}

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
