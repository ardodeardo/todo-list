import React from 'react'
import Item from './Item';
import { 
    ListContainer, OngoingList, ArchiveList, 
    ArchiveTitle, Empty, FeedbackImage } from './List.styled';

export default function List() {

    const feedbackImage = {
        empty: "https://lelogama.go-jek.com/prime/upload/image/Creative_Labs_wins_Media_Agency_of_the_Year.svg",
        notfound: "https://lelogama.go-jek.com/cache/c0/ef/c0efd340479bded453731c7ef1b2d8f0.webp",
    }

    return (
        <ListContainer>
            {/* <Empty>
                <FeedbackImage 
                    src={ feedbackImage.empty }></FeedbackImage>
                <p>Pertukangan belum ada Proyek lagi!</p>
            </Empty> */}
            <OngoingList>
                <Item></Item>
            </OngoingList>
            <ArchiveList>
                <ArchiveTitle>Task Archive</ArchiveTitle>
            </ArchiveList>
        </ListContainer>
    )
}
