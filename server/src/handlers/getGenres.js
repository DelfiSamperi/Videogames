const { getGenresToDB } = require('../controllers/genresControllers');

const getGenres = async (req, res) => {
    console.log('Aca tomo los distintos generos');

    try {
        const allGenres = await getGenresToDB();
        res.status(200).json({allGenres});

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { getGenres };