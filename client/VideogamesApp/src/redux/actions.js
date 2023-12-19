import axios from 'axios';
import {
    GET_VIDEOGAMES,
    GET_NAME,
    GET_DETAIL,
    POST_FORM,
    GET_GENRES
} from './actiontypes';

export const getAllVideogames = () => {
    try {
        return async (dispatch) => {
            const {data} = await axios.get('http://localhost:3000/videogames')
            return dispatch({
                type: GET_VIDEOGAMES,
                payload: data
            });
        }
    } catch (error) {
        throw Error(error.message);    
    }
};

export const getName = (name) => {
    try {
        return async(dispatch) => {
            const {data} = axios.get(`http://localhost:3000/videogames?name=${name}`)
            return dispatch({
                type: GET_NAME,
                payload: data
            })
        }
    } catch (error) {
        throw Error(error.message);
    }
};

export const getDetail = (id) => {
    try {
        return async(dispatch) => {
            const {data} = axios.get(`http://localhost:3000/videogames/${id}`)
            return dispatch({
                type: GET_DETAIL,
                payload: data
            })
        }
    } catch (error) {
        throw Error(error.message);
    }
};

export const postForm = () => {
    try {
        return (dispatch) => {
            axios.post('http://localhost:3000/videogames')
            .then(({data}) => {
                return dispatch({
                    type: POST_FORM,
                    payload: data
                })
            })
        }
    } catch (error) {
        throw Error(error.message);
    }
};

export const getAllGenres = () => {
    try {
        return async (dispatch) => {
            const { data } = await axios.get('http://localhost:3001/genres');
            return dispatch({
                type: GET_GENRES,
                payload: data
            });
        };
    } catch (error) {
        throw Error(error.message);
    }
};