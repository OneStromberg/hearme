import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({ 
  container: {
    flex:1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
  },
  input: {
    width: '$screenWidth * 0.75',
    borderWidth: 1,
    borderRadius: '$borderRadius',
    borderColor: 'black',
    padding: '$padding'
  },
  row: {
    marginVertical: '$marginVertical'
  }
})
