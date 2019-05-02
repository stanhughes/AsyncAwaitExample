/**
 * Dos Amigos Software
 * Stan Hughes
 *
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    };
  }

  // A function using a promise and a delay
  scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
          resolve('🤡');
        }, 3000);
    });
  }

  // an async function that can use the 'await'
  // if the 'async' keyword is missing, 'await' causes the following error.
  // "Can not use keyword 'await' outside an async function"
  async msg() {
    const msg = await this.scaryClown();
    this.setState({msg: msg});
  }

  render() {
    this.msg();
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Await/Async/Promise example</Text>
        <Text style={styles.instructions}>{this.state.msg}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
