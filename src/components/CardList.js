import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    const cardComponent = robots.map((robot, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={i}/>
    })
    return(
        <div className='cardlist-component'>
            {cardComponent}
        </div>
    )
};
export default CardList;