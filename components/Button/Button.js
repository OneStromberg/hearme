import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default ({ style, onPress, title }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <View>
        <Text style={styles.title} >{title}</Text>
      </View>
    </TouchableOpacity>
  )
}