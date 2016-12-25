'use strict';

import {combineReducers} from 'redux';

import login from './login.js';


const rootReducers = combineReducers({
    login,
    // login: () => {
    //     return {
    //         isLoggedIn: false,
    //         user: {},
    //         status: null,
    //     }
    // }
})
export default rootReducers;