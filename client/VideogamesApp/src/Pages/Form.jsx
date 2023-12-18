//Utilizar validaciones JavaScript.
//Utiliza las validaciones para que tu formulario sea reactivo y valide datos a medida que completas cada campo.
//Confirma si el elemento se ha creado correctamente.
//Si ocurre algún error en el backend debe comunicarlo a los usuarios de tu página.
//Al finalizar la creación limpia los campos de tu formulario.

import React, { useState } from "react";
import '../stylesheets/Form.css';

//funcion para verificar errores
const validate = (inputs) => {
    var errors = {};
    if(!inputs.name) errors.name = 'Se requiere un nombre';
    if(!inputs.rating) errors.rating = 'Se requiere un rating';
    if(!inputs.releaseDate) errors.releaseDate = 'Se requiere una fecha de lanzamiento';
    if(!inputs.plataformas) errors.plataformas = 'Se requiere al menos una plataforma';
    if(!inputs.descripcion) errors.descripcion = 'Se requiere una descripcion';
    if(!inputs.imagen) errors.imagen = 'Se requiere una imagen';
    if(!inputs.generos) errors.generos = 'Se requiere al menos un genero';

    return errors;
};

const Form = () => {
    //estado que guarda los datos ingresados en cada input
    const [inputs, setInputs] = useState({
        name: '',
        rating: '',
        releaseDate: '',
        plataformas: [],
        descripcion: '',
        imagen: '',
        generos: [],
    });

    //verificacion de errores
    const [errors, setErrors] = useState({});
    
    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value,
        })
        setErrors(
            validate({
                ...inputs,
                [event.target.name]: event.target.value,
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(errors.length === 0) {
            window.alert('Datos completos');
        } else { 
            window.alert('Debes completar todos los campos')
        };
    };

    return (
        <div className="formContainer">
            <h3>Complete the form</h3>
            <form className='form' onSubmit={handleSubmit} >

                <label> Nombre: </label>
                <input className={'warning' && errors.name} name='name' value={inputs.name} onChange={handleChange} placeholder='Ingresa nombre del juego' type='text' />
                <p className='danger'>{errors.name}</p>

                <label> Rating: </label>
                <input className={'warning' && errors.rating} name='rating' value={inputs.rating} onChange={handleChange} placeholder='Ingresa puntaje del juego' type='text' />
                <p className='danger'>{errors.rating}</p>
                
                <label> Fecha de Lanzamiento: </label>
                <input className={'warning' && errors.releaseDate} name='releaseDate' value={inputs.releaseDate} onChange={handleChange} placeholder='Ingresa fecha de lanzamiento' type='text' />
                <p className='danger'>{errors.releaseDate}</p>
                
                <label> Plataformas: </label>
                <input className={'warning' && errors.plataformas} name='plataformas' value={inputs.plataformas} onChange={handleChange} placeholder='Ingresa plataformas del juego' type='text' />
                <p className='danger'>{errors.plataformas}</p>
                
                <label> Descripcion: </label>
                <textarea className={'warning' && errors.descripcion} name='descripcion' value={inputs.descripcion} onChange={handleChange} placeholder='Ingresa descripcion del juego' type='text' />
                <p className='danger'>{errors.descripcion}</p>
                
                <label> Imagen: </label>
                <input className={'warning' && errors.imagen} name='imagen' value={inputs.imagen} onChange={handleChange} placeholder='Ingresa imagen del juego' type='text' />
                <p className='danger'>{errors.imagen}</p>
                
                <label> Generos: </label>
                <input className={'warning' && errors.generos} name='generos' value={inputs.generos} onChange={handleChange} placeholder='Ingresa generos del juego' type='text' />
                <p className='danger'>{errors.generos}</p>

                <button type='submit'> Create Game </button>

            </form>
        </div>
    )
};

export default Form;