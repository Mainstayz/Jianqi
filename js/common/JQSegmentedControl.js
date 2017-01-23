'use strict';
//@flow

import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import StyleSheet from './JQStyleSheet';

class JQSegmentedControl extends Component {
  props:{
    values: Array<String>;
    selectionColor: ?:string;
    selectedIndex: number;
    onChange: (newIndex:number) => void;
    style ?: any;
  }


  render() {
     var segments = this.props.values.map((value,index) => (
       <Segment
          key={value}
          value = {value}
          isSelected = {index === this.props.selectedIndex}
          selectionColor = {this.props.selectionColor || 'white'}
          onPress={()=> this.props.onChange(index)}>)
     );

    return (
        <View style={[styles.container,this.props.style]}>
          {segments}
        </View>
     ))
    );
  }
}

class Segment extends Component {
  props : {
    value: string;
    isSelected: boolean;
    selectionColor: string;
    onPress: () => void;
  }

  render() {
    var selectedButtonStyle;
    if (this.props.isSelected) {
      selectedButtonStyle = {
        borderColor: this.props.selectionColor
      };
    }

    var title = this.props.value && this
      .props
      .value
      .toUpperCase();

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={this.props.onPress}
        style={[styles.button, selectedButtonStyle]}>
        <Text style={[styles.label]}>
          {title}
        </Text>
      </TouchableOpacity>
    );

  }
}

const HEIGHT = 32;

var styles = StyleSheet.create({
  container: {
    flewDirection: 'row',
    backgroundColor: 'transparent',
    ios: {
      paddingBottom: 6,
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  button: {
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    ios: {
      height: HEIGHT,
      paddingHorizontal: 20,
      borderRadius: HEIGHT / 2,
      borderWidth: 1
    }
  },
  label: {
    letterSpacing: 1,
    fontSize: 12,
    color: 'white'
  },
  deselectedLabel: {
    color: 'rgba(255,255,255,0.7)'
  }

});

export default JQSegmentedControl;