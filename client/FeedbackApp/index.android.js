import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import MainView from './src/views/main/MainView';

export default class FeedbackApp extends Component {
  render() {
    return (
      <MainView />
    );
  }
}

AppRegistry.registerComponent('FeedbackApp', () => FeedbackApp);
