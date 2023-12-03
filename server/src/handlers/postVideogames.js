const { createVideogame } = require('../controllers/postVideogamesController');

const postVideogames = async (req, res) => {
    console.log('Este handler agrega un nuevo videogame a la DB');

    const { name, description, platforms, image, releaseDate, rating, genres } = req.body;
    try {
        const newGame = await createVideogame(name, description, platforms, image, releaseDate, rating, genres);
        res.status(201).json(newGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/*
{
    "name": "Untitled Goose Game",
    "platforms": ["PC", "Xbox One"],
    "description": "created in DB by Delfina",
    "releaseDate": "2019-09-20",
    "image": "https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg",
    "rating": 4.04,
    "id": 1,
    "genres": ["Action", "Indie"]
}
*/

module.exports = { postVideogames };