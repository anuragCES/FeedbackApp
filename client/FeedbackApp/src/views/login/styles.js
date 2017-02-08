import { StyleSheet } from 'react-native'

// Utils
// import colors from 'utils/colors'

export default StyleSheet.create({
  containerView: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  backgroundImageView: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
  },
  loginTouchable: {
    height: 50,
    margin: 20,
    width: 250,
    backgroundColor: 'mediumseagreen',
    alignItems: 'center',
    borderRadius: 25,
  },
  loginText: {
  marginTop: 15,
  fontWeight: 'bold',
  color: 'white',
},
logoStyle: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 30,
},
textInputStyle: {
  flex: 2,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
})
