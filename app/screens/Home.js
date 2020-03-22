import React, { Component } from 'react'
import { Text, View, ImageBackground, KeyboardAvoidingView, StyleSheet, Alert, ScrollView } from 'react-native'
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
    //   Alert.alert(`'Hello' ${this.state.data.name} 'with phone number'${this.state.data.phone}`)
        this.props.navigation.navigate('Card Picker',{data:this.state.data})
    }
    render() {
        return (
            <ImageBackground style={{ width:'100%', height:'100%' }} source={require('../../app/assets/birthday.gif')}>
             <ScrollView>
                    <Container>
                        <View>
                            <Text style={styles.header}>Welcome,Make a Birthday Card</Text>
                        </View>
                        <KeyboardAvoidingView style={styles.container} >
                            <MyTextInput
                                style={styles.index}
                                placeholder='Enter Sender name'
                                keyboardType='default'
                                onChangeText={(Sname) => this.changeText({ Sname })} />
                            <MyTextInput
                                style={styles.index}
                                placeholder='Enter Receiver name'
                                keyboardType='default'
                                onChangeText={(Rname) => this.changeText({ Rname })} />
                            <MyTextInput
                                style={styles.index2}
                                placeholder='Enter Short Message'
                                keyboardType='default'
                                onChangeText={(message) => this.changeText({ message })} />

                            <MyButton
                                name='Submit'
                                clickButton={this.buttonClick}
                            />
                        </KeyboardAvoidingView>
                    </Container>
             </ScrollView>
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
    header: {
        fontSize: 20,
        marginTop: 10,
        width: 350,
        height: 50,
        padding: 10,
        fontWeight: 'bold',
        color: 'red'
    },
    index: {
        color: 'black',
        backgroundColor: 'white',
        width: 350,
        height: 50,
        marginBottom: 20,
        padding: 10,
        borderRadius: 20
    }, index2: {
        color: 'black',
        backgroundColor: 'white',
        width: 350,
        height: 100,
        marginBottom: 20,
        padding: 10,
        borderRadius: 20
    }
});
