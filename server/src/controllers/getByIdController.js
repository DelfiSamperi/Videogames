const axios = require('axios');
const { Videogames, Genres } = require('../db');

const apiKey = process.env.apiKey;
const API_URL = 'https://api.rawg.io/api/games';

// GET BY ID =>  /videogames/:idVideogame
// devuelve objeto con los detalles del videojuego ingresado por id (tanto de API como DB)
// id recibido por parametro
// incluir datos de los generos del videogame

const getVideogameById = async (idVideogame, source) => {

    if (source === 'db') {
    
        const videogameDB = await Videogames.findByPk(idVideogame, {
            include: {
                model: Genres,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });
        if(!videogameDB) throw new Error(`No hay videogame almacenado con el ID ${idVideogame}`);
        return videogameDB;
    };

    if (source === 'api') {
    
        const dataApi = (await axios.get(`${API_URL}/${idVideogame}?key=${apiKey}`)).data;

        const videogameAPI = {
            name: dataApi.name,
            id: dataApi.id,
            description: dataApi.description_raw,
            platforms: dataApi.platforms.map((p) => (p.platform.name)),
            image: dataApi.background_image,
            releaseDate: dataApi.released,
            rating: dataApi.rating,
            genres: dataApi.genres.map((g) => (g.name)),
        };
        return videogameAPI;
    };
};

module.exports = { getVideogameById };