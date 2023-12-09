import React from 'react';
//import './Cards.css';
import Card from './Card';

export default function Cards(props) {
    const { videogames } = props;
    
    return (
        <div>
            <h1>Aca van las cards de los videogames</h1>
            {
                videogames.map(v => {
                    return (
                        <Card
                            onClose={()=> window.alert('se cierra la card')}
                            name={v.name}
                            key={v.id}
                            platforms={v.platforms.map((p) => (p.platform))}
                            image={v.image}
                            releaseDate={v.releaseDate}
                            rating={v.rating}
                            genres={v.genres.map((g) => (g.name))}
                        />
                    )
                })
            }
        </div>
    )
};