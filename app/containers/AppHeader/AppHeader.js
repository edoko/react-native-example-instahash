import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Header, Title, Left, Right, Button, Icon, Body } from 'native-base';

export default class AppHeader extends Component {
  
  render() {
    return (
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>InstaHash</Title>
          </Body>
          <Right/>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
  InputText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  InputWidth: {
    width: 300,
    alignSelf: 'center',
    marginTop: 100
  }
});