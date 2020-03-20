import React, { Component } from 'react'
import { Text, View, ImageBackground, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native'
import MyTextInput from '../components/MyTextInput'
import Container from '../components/container'
import MyButton from '../components/MyButton'


export default class Home extends Component {
    state={
        data:{}
    }
    changeText=(value)=>{
        this.setState(prevstate=>{
            return{
                data:{
                    ...prevstate.data,
                    ...value
                }
            }
        })
    }
    buttonClick=()=>{
      Alert.alert(`'Hello' ${this.state.data.name} 'with phone number'${this.state.data.phone}`)
    }
    render() {
        return (
            <ImageBackground style={{ width:'100%', height:'100%' }} source={require('../../app/assets/birthday.gif')}>
               <Container>
                    <KeyboardAvoidingView style={styles.container} >
                        <MyTextInput
                            placeholder='Enter name'
                            keyboardType='default'
                            onChangeText={(name) => this.changeText({ name })} />
                        <MyTextInput
                            placeholder='Enter number'
                            keyboardType='numeric'
                            onChangeText={(phone) => this.changeText({ phone })} />
                           
                        <MyButton
                         name='Submit'
                        clickButton={this.buttonClick}
                        />    
                    </KeyboardAvoidingView>
               </Container>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
});
