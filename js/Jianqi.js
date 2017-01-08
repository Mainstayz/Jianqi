/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
 AppRegistry,
	Animated,
	Easing,
	Image,
  ScrollView
} from 'react-native';

import StyleSheet from './common/JQStyleSheet.js';
import JQHeader from './common/JQHeader.js';


  type State = {
    y:Animated.Value;
  };

export default class Jianqi extends Component {
  state:State;
  constructor(){
    super();
    this.state = {
      y: new Animated.Value(0),
    }
  }

  handleScroll = (e:ScrollView) => {
    this.state.y.setValue(e.nativeEvent.contentOffset.y);
  }
  render() {
    var transform = {
            opacity: this.state.y.interpolate({
              inputRange: [-50,10,30],
              outputRange: [0.5,0.8,1],
              extrapolateLeft: 'clamp',
            })
          };
    return (
      <View style={styles.container}>
       <Animated.View style={[transform]}>
                <Text style={styles.welcome}>悄悄的，我出现了</Text>
            </Animated.View>

         <ScrollView showsVerticalScrollIndicator={true}
              contentContainerStyle={styles.contentContainer}
              scrollEventThrottle={100}
              onScroll = {(e) => this.handleScroll(e)}
              >
            <Text
            style={{color:'#FFF',margin:5,fontSize:16,backgroundColor:"blue"}}>
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
                Shake or press menu button for dev menuShake or press menu button for dev menu
            </Text>
         </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Jianqi', () => Jianqi);
