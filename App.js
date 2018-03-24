import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Input } from './components/Input';
import { Button } from './components/Button';

export default class App extends React.Component {
  state = {
    email: '',
    password: '',
  }

  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDmSu76GFQKfpkTSVqHoVTqPWZ_SxZ8P8o',
      authDomain: 'safe-place-36c64.firebaseapp.com',
    }

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder='Enter your email...'
          label='Email'
          onChangeText={email => this.setState( { email } )}
          value={this.state.email}
        />
        <Input
          placeholder='Enter your password...'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState( { password } )}
          value={this.state.password}
        />
        <Button onPress={validateLogin()}>Log In</Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
