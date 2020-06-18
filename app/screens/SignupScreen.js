import React from "react";
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Alert, KeyboardAvoidingViewBase } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../AppStyles";
import { ScrollView } from "react-native-gesture-handler";
import { verifyPassword, verifyName } from "../helpers";
// import firebase from "react-native-firebase";

class SignupScreen extends React.Component {
  state={
    data:{},
    error:{}
    
  }
  handleSignUp=()=>{
      let checkPassword = verifyPassword(this.state.data.password)
      if (checkPassword.error){
        this.setState(prevState=>{
          return{
            error: {
              ...prevState.error,
              password: checkPassword.error
            }
          }
        })
      }
      let checkName = verifyName(this.state.data.name)
      if (checkName.error){
        this.setState(prevState=>{
          return{
            error: {
              ...prevState.error,
              name: checkName.error
            }
          }
        })
      }
      let checkUserName = verifyName(this.state.data.username)
      if (checkUserName.error){
        this.setState(prevState=>{
          return{
            error: {
              ...prevState.error,
              username: checkUserName.error
            }
          }
        })
      }
      let checkNumber = verifyName(this.state.data.number)
      if (checkNumber.error){
        this.setState(prevState=>{
          return{
            error: {
              ...prevState.error,
              number: checkNumber.error
            }
          }
        })
      }
      let checkEmail = verifyName(this.state.data.email)
      if (checkEmail.error){
        this.setState(prevState=>{
          return{
            error: {
              ...prevState.error,
              email: checkEmail.error
            }
          }
        })
      }

    if (checkPassword.error || checkName.error || checkEmail.error || checkNumber.error || checkUserName.error)  {
      return;
    }

    if (!this.state.error.password && !this.state.error.name && !this.state.error.username && !this.state.error.number && !this.state.error.email){
      Alert.alert('Signup successful')
      this.props.navigation.navigate("Login")
    }
    
  }
  
  changeInput=(value)=>{


   let Objectkeys = Object.keys(value)
   if (Objectkeys[0] == 'password'){
     if(value.password.length >0){
       this.setState(prevState=>{
         return {
           error: {
             ...prevState.error,
             password: false
           }
         }
       })
     }
   }
    
   this.setState(prevState=>{
     return{
       data:{
         ...prevState.data,
         ...value
       }
     }
   })
  }


  render() {
    return (
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.container}>
            {/* <Text style={[styles.title, styles.leftTitle]}>Gift Card NG</Text> */}
            <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="Full Name"
                onChangeText={(name)=>this.changeInput({name})}
                value = {this.state.data.name}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
              <Text style={{color:'red',fontStyle:'italic', fontSize:13}}>{this.state.error.name}</Text>
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="UserName"
                onChangeText={(username)=>this.changeInput({username})}
                value={this.state.data.username}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
              <Text style={{ color: 'red', fontStyle: 'italic', fontSize: 13 }}>{this.state.error.username}</Text>
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="Phone Number"
                onChangeText={(number) => this.changeInput({number})}
                value={this.state.data.number}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
              <Text style={{ color: 'red', fontStyle: 'italic', fontSize: 13 }}>{this.state.error.number}</Text>
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="E-mail Address"
                onChangeText={(email) => this.changeInput({email})}
                value={this.state.data.email}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
              <Text style={{ color: 'red', fontStyle: 'italic', fontSize: 13 }}>{this.state.error.email}</Text>
            </View>
            <View style={styles.InputContainer}>
              <TextInput
                style={styles.body}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.changeInput({password})}
                value={this.state.data.password}
                placeholderTextColor={AppStyles.color.grey}
                underlineColorAndroid="transparent"
              />
              <Text style={{color:'red',fontStyle:'italic', fontSize:13}}>{this.state.error.password}</Text>
            </View>
            <Button
              containerStyle={[styles.facebookContainer, { marginTop: 50 }]}
              onPress={() => this.handleSignUp()}
              style={styles.facebookText}
            >
              Sign Up
        </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: 'purple',
    marginTop: 5,
    marginBottom: 5
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "center",
    marginLeft: 10
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
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
    color: AppStyles.color.white
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: "purple"
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main
  },
  body: {
    height: 32,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: 'purple',
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});

export default SignupScreen;
