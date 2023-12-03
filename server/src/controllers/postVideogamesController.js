const { Videogames, Genres } = require('../db');

// POST VIDEOGAMES EN LA DB
const createVideogame = async (
    name,
    description,
    platforms,
    image,
    releaseDate,
    rating,
    genres
) => {
    
    const findVideogame = await Videogames.findAll({ where: { name: name } });
    if (findVideogame.length) {
        throw new Error('El videojuego ingresado ya existe en la base de datos');
    };
    
    const newVideogame = await Videogames.create({
        name,
        description,
        platforms,
        image,
        releaseDate,
        rating,
    });
    
    //segun Nico
    
    genres.forEach(async g => {
       let genresDB = await Genres.findAll({where: {name: g} })
       //console.log(genresDB);
       newVideogame.addGenres(genresDB); 
    });
    
    /*
    let newVgGenre = await Genres.findAll({
        where: { name: newVideogame.genres }
    })
    */
    console.log(newVideogame);
    return (`Se creó el videojuego "${name} con los generos ${genres}."`);

};

module.exports = { createVideogame };