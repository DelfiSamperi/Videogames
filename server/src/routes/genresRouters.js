const { Router } = require('express'); //middleware de express

const routerGenres = Router();

// importo el handler
const { getGenres } = require('../handlers/getGenres');

//GET por genero
routerGenres.get('/', getGenres);

module.exports = routerGenres;