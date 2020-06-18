import React from "react";
import Button from "react-native-button";
import { Text, View, StyleSheet } from "react-native";
import { AppStyles } from "../AppStyles";
import { AsyncStorage, ActivityIndicator } from "react-native";
// import firebase from "react-native-firebase";

class WelcomeScreen extends React.Component {
  

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello and Welcome</Text>
        <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Log In
        </Button>
        <Button
          containerStyle={styles.signupContainer}
          style={styles.signupText}
          onPress={() => this.props.navigation.navigate("Signup")}
        >
          Sign Up
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: 'purple',
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: 'purple',
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    color: AppStyles.color.white
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: 'purple',
    marginTop: 15
  },
  signupText: {
    color: 'purple'
  },
  spinner: {
    marginTop: 200
  }
});

export default WelcomeScreen;
