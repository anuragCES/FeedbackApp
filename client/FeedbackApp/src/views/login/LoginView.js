import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
import {inject,observer} from 'mobx-react/native';

@inject('authStore')
@observer
export default class LoginView extends Component {
  render(){
    return(
      <View>
        <View>
          <Text>Username</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(username) => this.props.authStore.setUsername(username)}
            value={this.props.authStore.username}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(pwd) => this.props.authStore.setPassword(pwd)}
            value={this.props.authStore.password}
          />
        </View>
      </View>

    )
  }
}
