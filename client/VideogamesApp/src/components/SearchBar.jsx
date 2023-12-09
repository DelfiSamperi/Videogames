//import './SearchBar.css';
import React from 'react';

export default function SearchBar (props) {
    return (
        <div>
            <h3>Hola soy tu searchbar!!</h3>
            <input type='search' />
            <button onClick={(id) => {props.onSearch(id)}} >Buscar </button>
        </div>
    )
};