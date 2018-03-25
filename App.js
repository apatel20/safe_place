/*--import React from 'react';
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
			placeholder='Enter your first and last name...'
			label = 'Full Name'
			onChangeText={fullname => this.setState({fullname})}
			value={this.state.password}	
		/>
		<Input
          placeholder='Enter your university email...'
          label='Email'
          onChangeText={email => this.setState( { email } )}
          value={this.state.email}
        />
		<Input
			placeholder='Enter your student ID number'
			label = 'ID'
			onChangeText={id => this.setState({id})}
			value={this.state.id}
		/>
		<Input
			placeholder='Enter Phone Number of Contact'
			label='Phone Number'
			onChangeText={phone => this.setState({phone})}
			value={this.state.id}
		/>
        <Input
          placeholder='Enter your password...'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState( { password } )}
          value={this.state.password}
        />
		<Input
			placeholder='
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
*/


import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import t from 'tcomb-form-native';

const Form = t.form.Form

export default class App extends Component{
	handleSubmit = () => {
		const value = this._form.getValue();
		console.log('value: ', value);
	}
}

const User = t.struct({
	email: t.String,
	fullname: t.String,
	id: t.String,
	phone: t.String,
	password: t.String
});

  render() {
    return (
      <View style={styles.container}>
		<Form 
		ref={c => this._form = c}
		type={User} 
		options={options}
		/>
		<Button
			titel="Sign Up"
			onPress={this.handleSubmit}
		/>
	</View>
        <Input
			placeholder='Enter your first and last name...'
			label = 'Full Name'
			onChangeText={fullname => this.setState({fullname})}
			value={this.state.password}	
		/>
		<Input
          placeholder='Enter your university email...'
          label='Email'
          onChangeText={email => this.setState( { email } )}
          value={this.state.email}
        />
		<Input
			placeholder='Enter your student ID number'
			label = 'ID'
			onChangeText={id => this.setState({id})}
			value={this.state.id}
		/>
		<Input
			placeholder='Enter Phone Number of Contact'
			label='Phone Number'
			onChangeText={phone => this.setState({phone})}
			value={this.state.id}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
});