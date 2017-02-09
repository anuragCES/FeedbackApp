import React, { PropTypes, Component } from 'react'
// Components
import { View, TextInput, Text } from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons'

// Styles
import styles from './styles'

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
    const { icon, textStyle, placeholder, isPassword, placeholderTextColor, color } = this.props
    return (
      <View style={styles.textInputContainer}>
        <View style={styles.iconContainer}>
          <Icon
            name={icon}
            size={30}
            color={color}
          />
        </View>
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
