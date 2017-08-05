import React, { Component } from 'react';
import { StyleSheet, Clipboard, Linking } from 'react-native';

import { Content, Item, Input, Button, Text, Label, Form, Icon } from 'native-base';

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {

    let bar;

    const onCopy = () => {
      Clipboard.setString(bar);
      console.log('dfdfd');
    };

    const launchInsta = () => {
      Linking.openURL('instagram://library')
    };

    return (
        <Content>
          <Item style={styles.InputWidth}>
            <Input className="text1" placeholder="여기에 입력하세요."
                  style={styles.InputText}
                  onChangeText={(text) => this.setState({text})} />
          </Item>
          <Item disabled style={{width: 300,alignSelf: 'center'}}>
            <Text className="text2" disabled placeholder=''
                style={styles.hashText}>
                {bar = this.state.text.split(' ').map((word) => '#'+word).join(' ')}
            </Text>
          </Item>
          <Button onPress={onCopy} style={{alignSelf: 'center', marginTop: 50}}>
            <Text>
            복사하기
            </Text>
          </Button>
          <Button onPress={launchInsta} style={{alignSelf: 'center', marginTop: 20}}>
            <Text>
            인스타그램 실행
            </Text>
          </Button>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  InputText: {
    textAlign: 'center',
  },
  InputWidth: {
    width: 300,
    alignSelf: 'center',
    marginTop: 150
  },
  hashText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100
  }
});