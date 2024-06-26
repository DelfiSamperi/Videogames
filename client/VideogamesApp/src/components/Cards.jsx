import React from 'react';
import Card from './Card';
import '../stylesheets/Cards.css';

export default function Cards(props) {
    const { videogames } = props;
    console.log(videogames);
    return (
        <div className='cardsContainer'>
            {
                videogames?.map((game) => {
                    return (
                        <Card
                            name={game.name}
                            key={game.id}
                            id={game.id}
                            image={game.image}
                            genres={game.genres}
                        />
                    )
                })
            }
        </div>
    )
};