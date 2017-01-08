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

// reducer→	Redux reducer skeleton
// container→	Redux container with mapStateToProps, mapDispatchToProps, mergeProps, and connect functions
// mapStateToProps→	mapStateToProps arrow function
// mapDispatchToProps→	mapDispatchToProps arrow function
// mapDispatchToPropsBind→	mapDispatchToProps arrow function using bindActionCreators
// mergeProps→	mergeProps arrow function
// connect→	export default connect function
// component→	functional React component
// componentReturn→	functional React component with implicit return


