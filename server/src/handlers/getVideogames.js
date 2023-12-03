//trae un arreglo de videojuegos desde la api
const { getAllVideogames } = require('../controllers/getVideogamesControllers');

const getVideogames = async (req, res) => {
    console.log('este endpoint trae todos los videojuegos de la API y almacenados en DB');
    const { name } = req.query;

    try {
       if(name) {
        //si tenemos un condicional si o si hay que romper la ajecucion con RETURN
            const videogameByName = await getAllVideogames(name);
            console.log(`tiene que traer solo los videogames que coinciden con el nombre ${name}`);
            return res.status(200).json(videogameByName);
        
        } else {
            const response = await getAllVideogames();
            res.status(200).json(response);
        };        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { getVideogames };