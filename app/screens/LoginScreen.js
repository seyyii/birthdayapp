import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import MyButton from '../components/MyButton';
import { AppStyles } from "../AppStyles";
import { TouchableHighlight } from 'react-native-gesture-handler';
import { verifyPassword, verifyName } from "../helpers";


export default class Login extends Component {
  state = {
    data: {},
    error: {}

  }
  handleSignUp = () => {
    let checkPassword = verifyPassword(this.state.data.password)
    if (checkPassword.error) {
      this.setState(prevState => {
        return {
          error: {
            ...prevState.error,
            password: checkPassword.error
          }
        }
      })
    }
    let checkUserName = verifyName(this.state.data.username)
    if (checkUserName.error) {
      this.setState(prevState => {
        return {
          error: {
            ...prevState.error,
            username: checkUserName.error
          }
        }
      })
    }

    if (checkPassword.error ||  checkUserName.error) {
      return;
    }

    if (!this.state.error.password && !this.state.error.username ) {
      Alert.alert('Signin successful')
      this.props.navigation.navigate("Home")
    }

  }
  changeInput = (value) => {


    let Objectkeys = Object.keys(value)
    if (Objectkeys[0] == 'password') {
      if (value.password.length > 0) {
        this.setState(prevState => {
          return {
            error: {
              ...prevState.error,
              password: false
            }
          }
        })
      }
    }
    let Objectkeys1 = Object.keys(value)
    if (Objectkeys1[0] == 'username') {
      if (value.username.length > 0) {
        this.setState(prevState => {
          return {
            error: {
              ...prevState.error,
              username: false
            }
          }
        })
      }
    }

    this.setState(prevState => {
      return {
        data: {
          ...prevState.data,
          ...value
        }
      }
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView >
          <Text
            style={[styles.title, styles.leftTitle]}> Gift Cards NG
                </Text>
          <View style={styles.InputContainer}>
            <TextInput style={styles.body}
              onChangeText={(username) => this.changeInput({ username })}
              value={this.state.data.username}
              placeholder="E-mail or phone number"
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent" />
            <Text style={{ color: 'red', fontStyle: 'italic', fontSize: 13 }}>{this.state.error.username}</Text>
          </View>
          <View style={styles.InputContainer}>
            <TextInput style={styles.body}
              secureTextEntry={true}
              onChangeText={(password) => this.changeInput({ password })}
              value={this.state.data.password}
              placeholder="Password"
              placeholderTextColor={AppStyles.color.grey}
              underlineColorAndroid="transparent" />
            <Text style={{ color: 'red', fontStyle: 'italic', fontSize: 13 }}>{this.state.error.password}</Text>
          </View>
          <View style={{ margin: 7 }} />
          <View>
            <TouchableHighlight
              onPress={() => this.handleSignUp()}
              style={styles.loginText}>
              
                <Text>Login</Text>
            </TouchableHighlight>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding:10
  },
  or: {
    fontFamily: AppStyles.fontName.main,
    color: "black",
    marginTop: 40,
    marginBottom: 10
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: 'purple',
    marginTop: 10,
    marginBottom: 10
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "center",
    // marginLeft: 5
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    justifyContent:'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    backgroundColor: 'purple',
    padding: 20,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft:100
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: "red"
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
    marginLeft:20
  },
  body: {
    
    color: AppStyles.color.text,
    width: 350,
    height: 40,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    // marginLeft:10
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});