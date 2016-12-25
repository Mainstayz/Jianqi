'use strict';

import {StyleSheet,Platform} from 'react-native';

function create(styles){
    const platformStyle = {};
    Object.keys(styles).forEach((name) => {
        let {ios,android,...style} = {...styles[name]};
        if(ios && Platform.OS === 'ios'){
            style = {...style, ...ios};
        }
        if(ios && Platform.OS === 'android'){
            style = {...style, ...android};
        }
        console.log(style);
        platformStyle[name] = style;
    });
    return StyleSheet.create(platformStyle);
}

export default {
    create
};