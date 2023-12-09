import React from 'react';
import Card from './Card';
import '../stylesheets/Cards.css';

export default function Cards(props) {
    const { videogames } = props;
    
    return (
        <div className='cardsContainer'>
            <h1>Aca van las cards de los videogames</h1>
            {
                videogames.map(v => {
                    return (
                        <Card
                            onClose={()=> window.alert('se cierra la card')}
                            name={v.name}
                            key={v.id}
                            genres={v.genres.map((g) => (g.name))}
                            image={v.image}
                        />
                    )
                })
            }
        </div>
    )
};