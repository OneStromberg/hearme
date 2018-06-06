//@flow
import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';

import styles from './styles';

const mapStateToProps = ({ data }) => {
  return {
    fetching: data.fetching
  }
}

@connect(mapStateToProps)
export default class Preloader extends Component<{}> {
  constructor(props){
    super(props);
    this.visibility = new Animated.Value(props.fetching ? 1 : 0);
  }
  componentWillReceiveProps(nextProps) {
    Animated.timing(this.visibility, {
      toValue: nextProps.fetching ? 1: 0,
      duration: 250,
    }).start();
  }
  render(){
    const containerStyle = {
      opacity: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
      }),
      zIndex: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [-1, 10],
      }),
    };
    const combinedStyle = [containerStyle, styles.container];
    return (
      <Animated.View activeOpacity={0} style={combinedStyle} />
    )
  }
}