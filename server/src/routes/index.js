//ROUTERS
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerVideogames = require('./videogamesRouters.js');
const routerGenres = require('./genresRouters.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const mainRouter = Router();

mainRouter.use('/videogames', routerVideogames);
mainRouter.use('/genres', routerGenres);

module.exports = mainRouter;