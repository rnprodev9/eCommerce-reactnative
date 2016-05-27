//THIS IS GOING TO BE THE HOMEPAGE AND LOGIN
'use strict';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  getInitialState() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  //Rendering The Components
  render() {
    return (
      <View style={styles.container}>
        {this.login()}
        {this.emailInput()}
        {this.passwordInput()}
        {this.loginButton()}
        {this.linkToSignUp()}
        {this.linkToForgotPassword()}
        {this.linkToBrowse()}
      </View>
    );
  },
  //LOGO
  login() {
    return(
      <Text style={styles.loginText}>eCommerce</Text>
    );
  },
  //Email Input
  emailInput() {
    return(
      <TextInput style={styles.textInput} value={this.state.username} placeholder="  Email Address">
      </TextInput>
    );
  },
  //Password
  passwordInput() {
    return(
      <TextInput style={styles.textInput} value={this.state.email} placeholder="  Password">
      </TextInput>
    );
  },
  //Login Button
  loginButton() {
    return(
      <TouchableHighlight style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableHighlight>
    );
  },
  //Link To Signup
  linkToSignUp() {
    return(
      <Text style={styles.linkToBrowse}>Sign Up!</Text>
    );
  },
  //Link To ForgotPassword
  linkToForgotPassword() {
    return(
      <Text style={styles.linkToBrowse}>Forgot Password</Text>
    );
  },
  //Link To Browse
  linkToBrowse() {
    return(
      <Text style={styles.linkToBrowse}>Just Browse</Text>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  loginText: {
    fontSize: 32,
    margin: 10,
    fontWeight: '900',
    color: '#ecf0f1'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  loginButton: {
    height: 50,
    width: 150,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    alignItems: 'center'
  },
  linkToBrowse: {
    fontSize: 13,
    textDecorationLine: 'underline',
    color: 'white',
    alignItems: 'center',
    marginTop: 10
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