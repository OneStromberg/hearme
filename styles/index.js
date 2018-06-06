import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const GlobalStep = 8;

EStyleSheet.build({
  $screenWidth: width,
  $screenHeight: height,
  $borderRadius: GlobalStep,
  $padding: GlobalStep,
  $marginVertical: GlobalStep
});

export default EStyleSheet.create({ 
  container: {
    flex: 1
  }
})