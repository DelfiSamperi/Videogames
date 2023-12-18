import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

const Detail = () => {

    const { id } = useParams();
    console.log('id en Detail. ', useParams());
    const [detail, setDetail] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/videogames/${id}`)
            .then(response => response.data)
            .then((data) => {
                if (data.name) {
                    setDetail(data)
                } else {
                    console.log(`no hay game de ID: ${id}`)
                }
            });
            return setDetail({});
    }, [id]);

    return (
        <div>
            <Link to='/home'>
                <button>Go Back</button>
            </Link>
            <h2>{detail.name}</h2>
            <h3>Puntaje: {detail.rating}</h3>
            <img src={detail.image} alt={detail.name} />
            <h3>Fecha de Lanzamiento:  {detail.releaseDate}</h3>
            <h3>Plataformas: {detail.platforms}</h3>
            <h3>Géneros: {detail.genres}</h3>
            <p>{detail.description}</p>
            <h3>ID: {detail.id}</h3>

        </div>
    )
};

export default Detail;