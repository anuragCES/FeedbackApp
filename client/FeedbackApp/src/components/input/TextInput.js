import React, { PropTypes, Component } from 'react'
// Components
import { View, TextInput } from 'react-native'
// import {inject,observer} from 'mobx-react/native';

import iconSets from './iconSets'

// Styles
import styles from './styles'

// @inject('authStore')
// @observer

class TextInputComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value,
    }
  }
  handleOnChange = (value) => {
    this.setState({value: value})
    this.props.onChange(value)
  }
  render () {
    const { icon, textStyle, placeholder, isPassword, placeholderTextColor, iconSet, color } = this.props
    const Icon = iconSets[`${iconSet}`]
    return (
      <View style={styles.textInputContainer}>
        {icon
          ? <View style={styles.iconContainer}>
            <Icon
              name={icon}
              size={30}
              color={color}
            />
          </View> : null}
        <View style={styles.textInputView}>
          <TextInput
            style={textStyle}
            underlineColorAndroid='transparent'
            background='rgba(0,0,0,0)'
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            onChangeText={this.handleOnChange}
            value={this.state.value}
            secureTextEntry={isPassword}
          />
        </View>
      </View>
    )
  }
}
TextInputComponent.defaultProps = {
  value: '',
  isPassword: false,
  textStyle: {color: 'white'},
  placeholderTextColor: 'white',
  iconSet: 'EvilIcons',
  color: 'white',
}
TextInputComponent.propTypes = {
  icon: PropTypes.string,
  textStyle: PropTypes.object,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  iconSet: PropTypes.string,
  color: PropTypes.string,
}

export default TextInputComponent
