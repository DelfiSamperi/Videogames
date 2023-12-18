import '../stylesheets/SearchBar.css';
import React from 'react';
import { useState } from 'react';

export default function SearchBar (props) {
    const { onSearch } = props;
    const [name, setName] = useState('');
    
    const handleChange = (event) => {
        const {value} = event.target;
        setName(value);
        console.log('name: ', name);
    };

    return (
        <div className='searchContainer'>
            <h3>Hola soy tu searchbar!!</h3>
            <input type='search' name='search' id='search' onChange={handleChange} />
            <button onClick={() => {onSearch(name), setName('')}} >Buscar </button>
        </div>
    )
};