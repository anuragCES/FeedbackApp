import React, {Component} from 'react';
import {Text} from 'react-native';
import {Provider} from 'mobx-react/native';
import Routes from '../../routes/Routes';
import * as store from '../../stores';

export default class MainView extends Component {
  render(){
    return(
      <Provider { ...store}>
        <Routes />
      </Provider>
    )
  }
}
