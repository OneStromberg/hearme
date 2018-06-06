//@flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Smile from './../Smile';
import styles from './styles';

type Prop = {
  error: boolean,
  testResult: number
}

const mapStateToProps = ({ user, app }) => {
  return {
    error: user.error || app.error,
    testResult: user.testResult,
  }
}

const getTitleColor = (error, progress) => {
  if (error) {
    return 'orange';
  }

  return progress >= 1 ? 'maroon' : 'green'; 
}

const getProgress = (error, progress) => {
  if (error) {
    return 0.5;
  }

  return progress >= 1 ? 1 : progress;
}

const getTitle = (error, progress) => {
  if (error) {
    return "Unknown";
  }

  if (progress >= 1) {
    return "Bad";
  }

  return "Good"
}

@connect(mapStateToProps)
export default class BloodTestResult extends Component<Prop> {
  render(){
    const { error, testResult } = this.props;
    return (
      <View style={styles.container}>   
        <Text style={[styles.resultTitle, { color: getTitleColor(error, testResult)}]}>{getTitle(error, testResult)}</Text>
        <Smile progress={getProgress(error, testResult / 2)}/>
      </View>
    )
  }
}