import * as types from '../constants/actiontypes.js';

const initialState = {
    isLoggedIn: false,
    user: {},
    status: null
}

export default function login(state = initialState, action) {
    switch (action.type) {
        case types.LOGGED_DOING:
            return {
                ...state,
                status: 'doing'
            };
        case types.LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                status: 'done'
            };
        case types.LOGGED_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            };
        case types.LOGGED_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            }

        default:
            return state;
    }
}