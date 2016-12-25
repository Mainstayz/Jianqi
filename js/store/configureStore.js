'use strict';

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer  from '../reducers/index.js';

const logger = createLogger();
const creatStoreWithMiddleware  = applyMiddleware(thunk,logger)(createStore);

export default function configureStore(onComplete){
    const store = creatStoreWithMiddleware(rootReducer,onComplete);
    return store;
}