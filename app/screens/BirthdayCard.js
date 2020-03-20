import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native'
import Container from '../components/container'
import MyBirthdayCard from '../components/BirthdayCard'



export default class BirthdayCard extends Component {
    render() {
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../app/assets/birthday.gif')}>
                <Container >
                    <View >
                        <Text style={styles.header}>Choose a Card</Text>
                    </View>
                    <View style={styles.container}>
                        <MyBirthdayCard />
                        <MyBirthdayCard>
                           
                        </MyBirthdayCard>
                    </View>
                    <View style={styles.container}>
                        <MyBirthdayCard />
                        <MyBirthdayCard />
                    </View>
                </Container>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection:'row'
    },
    header:{
        fontSize: 30,
         marginTop: 10, 
         width: 250, 
         height: 50, 
         padding: 10, 
         fontWeight: 'bold', 
        color: 'red'
    }
});
