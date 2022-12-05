import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return(
        <div>
            <Card name='Jane Doe' />
            <Card name='Bob Smith' />
            <Card name='James Bond' />
            <Card name='Paul Walker' />
        </div>
    )
};
export default CardList;