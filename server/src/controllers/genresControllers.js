// GET | /genres**
//  Obtiene un arreglo con todos los géneros existentes de la API.

const axios = require('axios');
const { Genres } = require('../db');

const myAPI = process.env.apiKey;
const API_GENRES = `https://api.rawg.io/api/genres?key=${myAPI}`;

// Tomo todos los generos desde la API y los almaceno en la base de datos para consumirlos desde ahi
const getGenresToDB = async() => {
    //1° veo si ya hay genres almacenados
    const genresDB = await Genres.findAll();
    if(!genresDB.length) {
        
        const dataApi = (await axios.get(API_GENRES)).data;

        const genresApi = dataApi.results.map((g) => ({
            id: g.id,
            name: g.name
        }));

        await Genres.bulkCreate(genresApi);
        const genresDB = await Genres.findAll();

        console.log('La Base de Datos cuenta con generos almacenados desde la API');
        return genresDB;

    } else {
        console.log('La base de datos de generos ya estaba cargada (al poner {alter:true} en index.js la funcion getGenresToDB entra en el else!!');
        //console.log(genresDB);
    };
    
};

module.exports = { getGenresToDB };