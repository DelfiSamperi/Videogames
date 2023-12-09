import React from 'react';
//import './Card.css';

const Card = (props) => {
  
    return (
        <div>
            <button onClick={props.onClose}>X</button>
            <h3>{props.name}</h3>
            <h3>{props.releaseDate}</h3>
            <h3>{props.platforms}</h3>
            <h3>{props.description}</h3>
            <h3>{props.rating}</h3>
            <h3>{props.gender}</h3>
            <img src={props.image} alt={props.name} />
        </div>
    )
                            
};

export default Card;