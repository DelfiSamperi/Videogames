import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

const Home = () => {
    const [videogames, setVideogames] = useState([]);

    useEffect(() => {
       // setLoading(true);
       axios
        .get('http://localhost:3000/videogames')
        .then((response) => {
            setVideogames(response.data)
        })
        .catch((error) =>{
            console.log(error);
        })
    }, []);

    return (
        <div>
            <h3>Where magic happens!</h3>
            <h4>Esta seria la card de cada videogame</h4>

        </div>
    )
};

export default Home;