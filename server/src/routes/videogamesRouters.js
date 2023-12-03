const { Router } = require('express'); //middleware de express

const routerVideogames = Router();

// HANDLERS
const { getVideogames } = require('../handlers/getVideogames');
const { getById } = require('../handlers/getById');
const { postVideogames } = require('../handlers/postVideogames');

//GET ALL y por query
routerVideogames.get('/', getVideogames);

//GET ID
routerVideogames.get('/:idVideogame', getById);

//POST 
routerVideogames.post('/', postVideogames);


module.exports = routerVideogames;