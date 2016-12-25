'use strict';

import * as types from '../constants/actiontypes.js';

let testUser = {
	'name': 'juju',
	'age': '24',
	'avatar': 'https://avatars1.githubusercontent.com/u/1439939?v=3&s=460'
};


function login(opt){
    return (dispatch) => {
        dispatch(login());
        let inner_get = fetch('http://www.baidu.con')
        .then((res) => {
            dispatch(loginSuccess(testUser));
        }).catch((e) => {
            dispatch(loginError(e));
        });
    }
}



function login(){
    return {
        type:types.LOGGED_IN
    }
}

function loginSuccess(user){
    return {
        type: types.LOGGED_SUCCESS,
        user
    }
}
function loginError(error){
    return {
        type: types.LOGGED_ERROR,
        error
    }
}
function loginDoing(){
    return {
        type: types.LOGGED_DOING,
    }
}