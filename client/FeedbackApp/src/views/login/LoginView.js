import React, {Component} from 'react';
import {Text} from 'react-native';
import {inject,observer} from 'mobx-react/native';

@inject('authStore')
@observer
export default class LoginView extends Component {
  render(){
    console.log(this.props);
    return(
      <Text>My name is {this.props.authStore.username}</Text>
    )
  }
}
