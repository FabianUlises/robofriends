import React from 'react';
const Card = ({name, email, id}) => {
    return(
        <div className='bg-light-green dib br3 ma2 grow'>
            <img src={`https://robohash.org/${id}`} alt="robot profile pic" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
};
export default Card;