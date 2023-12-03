const axios = require('axios');
const { Videogames, Genres } = require('../db');
const { Op } = require('sequelize');
const myAPI = process.env.apiKey;

const API_URL = `https://api.rawg.io/api/games?limit=200&key=${myAPI}`;

// GET VIDEOGAMES FROM THE API
const getFromApi = async () => {
    //en la peticion viene muchisima informacion, la que nosotros necesitamos
    //viene dentro de un objeto llamado DATA (y dentro de data esta results)
    const dataApi = (
        await axios.get(API_URL)
    ).data;
    
    const videogamesFromApi = dataApi.results.map((videogame) => ({
        name: videogame.name,
        id: videogame.id,
        platforms: videogame.platforms.map((p) => (p.platform.name)),
        image: videogame.background_image,
        releaseDate: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map((g) => (g.name)),
    }));
    
    if (!videogamesFromApi.length) throw new Error('no se pudo acceder a los videojuegos de la API');
    return videogamesFromApi;
};

// GET FROM DB
const getFromDB = async () => {
    const gamesDB = await Videogames.findAll({
        include: {
            model: Genres,
            attributes: ['name'],
            //si quito este through me muestra atributos de la tabla intermedia (como ids y otros?)
            through: {
                attributes: [],
            },
        },
    });
    if (!gamesDB.length) console.log('no hay videojuegos almacenados en DB');
    return gamesDB;
};

//GET ALL VIDEOGAMES
const getAllVideogames = async (name) => {
    const videogamesDB = await getFromDB();
    const videogamesApi = await getFromApi();
    const allVideogames = [...videogamesDB, ...videogamesApi]
    
    // GET VIDEOGAMES BY NAME =>  /videogames?name=" "
    //obtengo los primeros 15 que coincidan con query (tanto de API como DB)
    //no distingue minusculas de mayusculas
    //mensaje adecuado si el videojuego no existe
    if(name) {
        const filteredVideogames = allVideogames.filter((v)=>
            v.name.toLowerCase().includes(name.toLowerCase())
        ).slice(0,15);
        
        if(!filteredVideogames.length) throw new Error(`No hay videojuego llamado ${name}.`)
        return filteredVideogames;
    };

    return allVideogames;
};

module.exports = {
    getFromDB,
    getFromApi,
    getAllVideogames
};