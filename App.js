//@flow
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';

import store from './store';
import Root from './components';
import styles from './styles';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Root />
        </Provider>
      </View>
    );
  }
}