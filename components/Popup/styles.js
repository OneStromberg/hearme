import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({ 
  container: {
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'absolute',
    width: '$screenWidth',
    height: '$screenHeight',
  },
  fader: {
    backgroundColor: 'black',
    position: 'absolute',
    width: '$screenWidth',
    height: '$screenHeight',
  },
  message: {
    color: 'red',
    fontSize: 34
  }
})
