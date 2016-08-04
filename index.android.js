/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import requirejs from 'requirejs';
// import music21 from './public/music21j/src/music21'
import React, { Component } from 'react';
import $ from 'jquery';
import { AppRegistry,  Text,  View, WebView} from 'react-native';

class player extends Component {
  constructor(props) {
    super(props);
    console.log(require);
    console.log('HERE');
    
    // require(['./public/music21j/src/music21'], function () {
    //   var stream = music21.tinyNotation.TinyNotation(_reactComponent.props.tinyNotation);
    //   // TODO this method might be deprecated.
    //   // @see music21.stream.Stream.renderScrollableCanvas();
    //   stream.renderScrollableCanvas($('#can'));
    //   // Toolbar
    //   var toolBar = stream.getPlayToolbar();
    //   console.log(toolBar);
  }
  // });

  render() {
    return (
      <WebView
    //    source={{uri: 'http://localhost:3000'}}
        //source={{uri: 'http://www.google.com', scalesPageToFit: true}}
        source={{uri: 'http://10.0.2.2:3000', scalesPageToFit: true}}
      />
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
