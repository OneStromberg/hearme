//@flow
import React, { Component } from 'react';
import { Text, TextInput, View, Keyboard } from 'react-native';
import Button from './../Button';
import { connect } from 'react-redux';

import { runTest } from './../../actions/user';

import styles from './styles';

type Props = { 
  runTest: Function 
};

const mapStateToProps = ({ user }) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      runTest : (testName, value) => dispatch(runTest(testName, value)),
  }
};

type State = {
  testName: string,
  testValue: number
};

@connect(mapStateToProps, mapDispatchToProps)
export default class InputForm extends Component<Props, State> {
  constructor(){
    super();
    this.state = {
      testName: "",
      testValue: NaN
    }
  }
  onFieldChanged = (fieldName: string, value: number) => {
    this.setState({
      [fieldName]: value
    });
  }
  onCheckPress = () => {
    const { testName, testValue } = this.state;
    const { runTest } = this.props;
    runTest(testName, testValue);
    Keyboard.dismiss();
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.row]}>Am I Ok?</Text>
        <TextInput onChangeText={text => this.onFieldChanged('testName', text)} 
          placeholder={"Input Name of the Test"} 
          style={[styles.testName, styles.row, styles.input]}/>
        <TextInput keyboardType='numeric' 
          onChangeText={text => this.onFieldChanged('testValue', text)} 
          placeholder={"Input your values"} 
          style={[styles.testValue, styles.row, styles.input]}/>
        <Button style={styles.row} title={'Check'} onPress={this.onCheckPress}/>
      </View>
    )
  }
}