//@flow
import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';
import { connect } from 'react-redux';
import LottieView from 'lottie-react-native';

import styles from './styles';

type Props = {
  progress: number
}

type State = {
  progress: Animated.Value
}

export default class Smile extends Component<Props, State> {
  anim: LottieView;
  constructor(props: Props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }
  componentWillReceiveProps(nextProps: Props)  {
    Animated.timing(this.state.progress, {
      toValue: nextProps.progress,
      duration: 500,
      easing: Easing.linear,
    }).start();
    console.log(nextProps.progress);
  }
  render(){
    return (
      <View style={styles.container}>
        <LottieView
            progress={this.state.progress}
            style={styles.smile}
            ref={(anim) => this.anim = anim}
            enableMergePathsAndroidForKitKatAndAbove
            source={require('./../../assets/stro-smile.json')}
        />
      </View>
    )
  }
}