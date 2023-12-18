import React from 'react';
import '../stylesheets/Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
    //const { name, key, image, genres } = props;
    //const {game } = props;
    console.log('props de cada card: ', props);
    return (

        <div className='gameCard'>

            <Link to={`/detail/${props.id}`}>
                <h3>{props.name}</h3>
                <h3>
                    {props.genres?.map((genre) => {
                        return <p>{genre}</p>;
                    })}
                </h3>
                <img className='image' src={props.image} alt={props.name} />
            </Link>

        </div>

    )
};