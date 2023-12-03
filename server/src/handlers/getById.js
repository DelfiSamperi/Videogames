const { getVideogameById } = require('../controllers/getByIdController');

const getById = async (req, res) => {
    const {idVideogame} = req.params;
        
    const source =  isNaN(idVideogame) ? 'db' : 'api';
    console.log(`este endpoint trae el detalle de videogame ${idVideogame} desde ${source}.`);
    
    try {
        const videogameById = await getVideogameById(idVideogame, source);
        res.status(200).json(videogameById);

    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

module.exports = { getById };