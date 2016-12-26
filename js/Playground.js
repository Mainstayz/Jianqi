//@flow
import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './common/JQHeader.js';

// $FlowFixMe
class Playground extends React.Component {
    state : {
        content?: Array < any >;
    };
    constructor() {
        super();
        const content = [];
        const define = (name, render) => {
            content.push(<Example key={name} render={render}/>);
        };
        // $FlowFixMe
        Header.__cards__(define);
        this.state = {
            content
        };
    }

    render() {
        return (
            <View
                style={{
                backgroundColor: '#336699',
                flex: 1
            }}>
                {this.state.content}
            </View>
        );
    }
}

class Example extends React.Component {
    state = {
        inner: null
    };

    render() {
        const content = this
            .props
            .render(this.state.inner, (inner) => this.setState({inner}));
        return (
            <View>
                {content}
            </View>
        );
    }
}
export default Playground;