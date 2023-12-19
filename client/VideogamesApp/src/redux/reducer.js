import {
    GET_VIDEOGAMES,
    GET_NAME,
    GET_DETAIL,
    POST_FORM,
    GET_GENRES
} from './actiontypes';

const initialState = {
    allVideogames: [],
    videogameName: [],
    detail: [],
    form: [],
    genres: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                allVideogames: action.payload,
            };
        case GET_NAME:
            return {
                ...state,
                videogameName: action.payload,
            };
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload,
            };
        case POST_FORM:
            return {
                ...state,
                form: action.payload,
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        default:
            return {...state};
    }
};