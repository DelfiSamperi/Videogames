import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../stylesheets/NavBar.css';

export default function NavBar(props) {
    const {onSearch } = props;

    return (
        <div className='navbar'>
            <h4>aca esta el input de busqueda y algo mas??</h4>
            <SearchBar onSearch={onSearch} />
            <Link to='/form'>Create</Link>
             
        </div>
    )
};