'use strict';

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import Jianqi from './Jianqi.js';
import Playground from './Playground.js';

const store = configureStore();


export default class Setup extends Component {
    render() {
      return (
        <Provider store={store}>
          <Jianqi/>
        </Provider>
      );
    }
}
