import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({ 
  container: {
    backgroundColor: 'blue',
    borderRadius: "$borderRadius",
    paddingVertical: "$padding",
    paddingHorizontal: "$padding * 2",
  },
  title: {
    color: 'white'
  }
})
