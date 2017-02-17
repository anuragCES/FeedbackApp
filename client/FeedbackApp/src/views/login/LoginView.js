import React, {Component, PropTypes} from 'react';
import {Text, TextInput, View, TouchableHighlight, Image} from 'react-native';
import {inject,observer} from 'mobx-react/native';
import TextInputComponent from '../../components/input/TextInput';

// to dismiss soft keyboard
import dismissKeyboard from 'dismissKeyboard';

// Styles
import styles from './styles';

const isPassword = true;

@inject('authStore')
@observer
export default class LoginView extends Component {

  login () {
    dismissKeyboard();
    console.warn('login clicked');
  }

  handleUsernameChange = (username) => {
    this.props.authStore.setUsername(username);
  }

  handlePasswordChange = (pwd) => {
    this.props.authStore.setPassword(pwd);
  }
// TODO: use constant for colors
  render () {
    return (
      <View style={styles.containerView}>
        <Image style={styles.backgroundImageView} source={require('./background.png')}>
          <View style={styles.logoStyle}>
            <Image source={require('./logo.png')} />
          </View>
          <View>
            <Text style={styles.textStyle}>Feedback App</Text>
          </View>
          <View style={styles.textInputStyle} >
            <TextInputComponent
              icon='user'
              placeholder='Enter User Name'
              onChange={this.handleUsernameChange}
              value={this.props.authStore.username}
            />
            <TextInputComponent
              icon='lock'
              placeholder='Enter Password'
              onChange={this.handlePasswordChange}
              value={this.props.authStore.password}
              isPassword
            />
            <TouchableHighlight
              style={styles.loginTouchable}
              onPress={this.login}
              underlayColor='rgba(255, 255, 255, 0.25)'
            >
              <Text  style={styles.loginText}>
                Log In
              </Text>
            </TouchableHighlight>
          </View>
        </Image>
      </View>
    );
  }
}

LoginView.propTypes = {
  authStore: PropTypes.object
};
