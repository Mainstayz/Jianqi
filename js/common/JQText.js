'use strict';

import React from 'react';
import ReactNative,{StyleSheet} from 'react-native';
import JQColor from './JQColor.js';

export function Text({
    style,
    ...props
}) {
    return <ReactNative.Text style={[styles.font, style]} {...props}/>
}

var styles = StyleSheet.create({
    font: {
        fontFamily: 'Helvetica'
    }
})
