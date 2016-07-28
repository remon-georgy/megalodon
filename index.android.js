/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import requirejs from 'requirejs';
import React, { Component } from 'react';
import $ from 'jquery';
import { AppRegistry,  Text,  View} from 'react-native';

class player extends Component {
  constructor(props) {
    super(props);
    
    var _reactComponent = this;
    require(['./public/music21j/src/music21'], function () {
      var stream = music21.tinyNotation.TinyNotation(_reactComponent.props.tinyNotation);
        // TODO this method might be deprecated.
        // @see music21.stream.Stream.renderScrollableCanvas();
      stream.renderScrollableCanvas($('#can'));
      // Toolbar
      var toolBar = stream.getPlayToolbar();
      console.log(toolBar);
    });
  }

  render() {
    return (
      <View className="player">
        <Text>Click and listen</Text>
        <View id="can"></View>
      </View>
    );
  }
}

class playerApp extends Component {
  render() {
    return (
      <player tinyNotation="g# a b d b a g">
      </player>
    );
  }
}

AppRegistry.registerComponent('player', () => player);
