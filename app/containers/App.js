/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Inputs from '../components/Inputs/Inputs'
import AppHeader from './AppHeader/AppHeader'
import { Container } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
      <AppHeader/>
      <Inputs/>
      </Container>
    );
  }
}
