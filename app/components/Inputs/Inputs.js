import React, { Component } from 'react';
import { StyleSheet, Clipboard } from 'react-native';
import { Content, Item, Input, Button, Text, Label, Form, Icon } from 'native-base';
import AppLink from 'react-native-app-link';
import I18n from 'react-native-i18n'

export default class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {

    let bar;

    const onCopy = () => {
      Clipboard.setString(bar);
    };

    const launchInsta = () => {
      AppLink.maybeOpenURL('instagram://app', { appName: 'Instagram', appStoreId: 'id389801252', playStoreId: 'com.instagram.android' }).then(() => {
        
        })
        .catch((err) => {
        
        });
    };

    return (
        <Content>
          <Item style={styles.InputWidth}>
            <Input className="text1" placeholder={I18n.t('text_1')}
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
            {I18n.t('btn_copy')}
            </Text>
          </Button>
          <Button warning onPress={launchInsta} style={{alignSelf: 'center', marginTop: 20}}>
            <Text>
            {I18n.t('btn_instagram')}
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

I18n.fallbacks = true
I18n.translations = {
  en: {
    text_1: 'Text here.',
    btn_copy: 'COPY',
    btn_instagram: 'Open Instagram'
  },
  ko: {
    text_1: '여기에 만들 문장을 입력해주세요.',
    btn_copy: '복사하기',
    btn_instagram: '인스타그램 열기'
  }
}