//@flow
import React, { Component } from 'react';
import { Animated, Easing, View, Text } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';

import styles from './styles';

type Prop = {
  visible: boolean,
  message: string
}

const mapStateToProps = ({ data, app }): Prop => {
  return {
    visible: app.showPopup,
    message: app.error
  }
}

@connect(mapStateToProps)
export default class Popup extends Component<Prop> {
  visibility: Animated.Value;
  constructor(props: Prop){
    super(props);
    this.visibility = new Animated.Value(props.visible ? 1 : 0);
  }
  componentWillReceiveProps(nextProps: Prop) {
    Animated.timing(this.visibility, {
      toValue: nextProps.visible ? 1: 0,
      duration: 250,
    }).start();
  }
  render(){
    const containerStyle = {
      zIndex: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [-1, 10],
      }),
    };
    const opacityStyle = {
      opacity: this.visibility.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.7],
      }),
    }
    const { message, visible } = this.props;
    const combinedContainerStyle = [containerStyle, styles.container];
    const combinedStyle = [opacityStyle, styles.fader];
    return (
      <Animated.View style={combinedContainerStyle}>
        <Animated.View style={combinedStyle}/>
        <Text style={styles.message}>{visible && message}</Text>
      </Animated.View>
    )
  }
}