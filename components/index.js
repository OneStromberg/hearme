//@flow
import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import BloodTestResult from './BloodTestResult';
import Popup from './Popup';
import styles from './styles';
import InputForm from './InputForm';

export default class Root extends Component<any> {
  render(){
    return (
      <View style={styles.root}>
        <InputForm />
        <BloodTestResult />
        <Popup />
      </View>
    )
  }
}