import React from 'react';
import Item from './Item';
// import { v4 as uuidv4 } from 'uuid';
import { 
    ListContainer,
    ArchiveTitle, Empty, FeedbackImage } from './List.styled';

export default function List(props) {

    const emptyTemplate = {
        empty: {
            img: "https://lelogama.go-jek.com/prime/upload/image/Creative_Labs_wins_Media_Agency_of_the_Year.svg",
            description: "Pertukangan belum ada Proyek lagi!"
        },
        notfound: { 
            img: "https://lelogama.go-jek.com/cache/c0/ef/c0efd340479bded453731c7ef1b2d8f0.webp",
            description: "ga ketemu"
        }
    }
    
    const handleEmptyOrNotFoundItem = () => {
        const items = props.itemList;
        const inProgressItems = items.filter(obj => obj.is_complete !== true && obj.is_deleted === false);
        if (inProgressItems.length === 0) {
            return (
                <Empty>
                    <FeedbackImage 
                        src={ emptyTemplate.empty.img }></FeedbackImage>
                        <p>{ emptyTemplate.empty.description }</p>
                </Empty> 
            )
        }
    }

    const renderListItem = () => {
        const items = props.itemList;
        let inProgressItems = (
            props.filterSearchBy.length > 2 ?
            items.filter(obj => obj.is_complete !== true && obj.is_deleted === false && obj.title.toLowerCase().indexOf(props.filterSearchBy.toLowerCase()) >= 0)
            :
            items.filter(obj => obj.is_complete !== true && obj.is_deleted === false))

        inProgressItems = props.filterSortBy === "3" ? inProgressItems.sort((a, b) => b.priority - a.priority) : inProgressItems.sort((a, b) => a.priority - b.priority);
        
        const completedItems = items.filter(obj => obj.is_complete === true && obj.is_deleted === false);
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
                        // console.log(item);
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

        return [inProgressTemp,completedTemp]
    }

    return (
        <ListContainer>
            { handleEmptyOrNotFoundItem() }
            { renderListItem() }
        </ListContainer>
    )
}
