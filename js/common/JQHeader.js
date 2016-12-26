// @flow

'use strict';
import JQColor from './JQColor.js';
import JQStyleSheet from './JQStyleSheet.js';
import {Text} from './JQText.js';
import React, {Component} from 'react';
import {TouchableOpacity, View, Image, Platform} from 'react-native';

export type Layout = 'default' | 'icon' | 'title'; // Use platform defaults (icon on Android, text on iOS)  // Always use icon | 'title';

export type Foreground = 'light' | 'dark';

export type Item = {
  title?: string;
  icon?: number;
  layout?: Layout;
  onPress?: () => void;
};

export type Props = {
  title?: string;
  leftItem?: Item;
  rightItem?: Item;
  extraItems?: Array<Item>;
  foreground?: Foreground;
  style?: any;
  children?: any;
};

class JQHeaderIOS extends Component {
  static height:number;
  props: Props;

  render() {
    const {leftItem, title, rightItem, foreground} = this.props;
    const titleColor = foreground === 'dark'
      ? JQColor.darkText
      : JQColor.white;
    const itemsColor = foreground === 'dark'
      ? JQColor.lightText
      : JQColor.white;

    const content = React
      .Children
      .count(this.props.children) === 0
      ? <Text
          style={[
          styles.titleText, {
            color: titleColor
          }
        ]}>
          {title}
        </Text>
      : this.props.children;

    return (
      <View
        style={[
        styles.header,
        this.props.style, {
          paddingLeft: 10,
          paddingRight: 10
        }
      ]}>
        <View style={styles.leftItem}>
          <ItemWarpperIOS color={itemsColor} item={leftItem}/>
        </View>
        <View style={styles.centerItem}>
          {content}
        </View>
        <View style={styles.rightItem}>
          <ItemWarpperIOS color={itemsColor} item={rightItem}/>
        </View>
      </View>
    );
  }
}

class ItemWarpperIOS extends Component {

  props: {
    item: Item;
    color: string;
  };
 

  render() {
    const {item, color} = this.props;
    if (!item) {
      return null;
    }

    let content;
    let {title, icon, layout, onPress} = item;
    if (layout !== 'icon' && title) {
      content = (
        <Text style={[styles.itemText, {
            color
          }]}>
          {title.toUpperCase()}
        </Text>

      )
    } else if (icon) {
      content = <Image source={icon}/>;
    }

    return (
      <TouchableOpacity onPress={onPress} style={styles.itemWarpper}>
        {content}
      </TouchableOpacity>
    )
  }
}

var STATUS_BAR_HEIGHT = Platform.OS === 'ios'
  ? 20
  : 25;
var HEADER_HEIGHT = Platform.OS === 'ios'
  ? 44 + STATUS_BAR_HEIGHT
  : 56 + STATUS_BAR_HEIGHT;

var styles = JQStyleSheet.create({
  toolbarContainer: {
    paddingTop: STATUS_BAR_HEIGHT
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT
  },
  header: {
    backgroundColor: 'transparent',
    paddingTop: STATUS_BAR_HEIGHT,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  leftItem: {
    flex: 1,
    alignItems: 'flex-start'
  },
  centerItem: {
    flex: 2,
    alignItems: 'center'
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end'
  },
  itemWrapper: {
    padding: 11
  },
  itemText: {
    letterSpacing: 1,
    fontSize: 12,
    color: 'white'
  }
});

const Header = JQHeaderIOS;
Header.height = HEADER_HEIGHT;

// $FlowFixMe
Header.__cards__ = (define) => {
  const menuItem = {
    title: 'Menu',
    icon: require('./img/hamburger.png'),
    onPress: () => alert('Menu button pressed!')
  };
  const filterItem = {
    title: 'Filter',
    icon: require('./img/filter.png'),
    onPress: () => alert('Filter button pressed!')
  };

  define('Simple', () => <Header title="Hello, world"/>);
  define('With items', () => (<Header title="Default" leftItem={menuItem} rightItem={filterItem}/>));
  define('Forcing icons', () => (<Header
    title="Forcing icons"
    leftItem={{
    ...menuItem,
    layout: 'icon'
  }}
    rightItem={{
    ...filterItem,
    layout: 'icon'
  }}/>));
  define('Forcing title', () => (<Header
    title="Forcing title"
    leftItem={{
    ...menuItem,
    layout: 'title'
  }}
    rightItem={{
    ...filterItem,
    layout: 'title'
  }}/>));
  define('With content', () => (
    <Header leftItem={menuItem}>
      <View style={{
        backgroundColor: '#224488'
      }}>
        <Text style={{
          color: 'yellow'
        }}>
          Yellow text as title
        </Text>
      </View>
    </Header>
  ));
  define('With Background', () => (<Header
    title="With Background"
    leftItem={{
    ...menuItem,
    layout: 'title'
  }}
    rightItem={{
    ...filterItem,
    layout: 'title'
  }}
    style={{
    backgroundColor: '#224488'
  }}/>));
  define('With light background', () => (<Header
    title="Light Background"
    leftItem={{
    ...menuItem,
    layout: 'title'
  }}
    rightItem={{
    ...filterItem,
    layout: 'title'
  }}
    style={{
    backgroundColor: 'white'
  }}
    foreground="dark"/>));
};

export default Header;