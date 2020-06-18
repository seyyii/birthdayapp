import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import Container from '../components/container'
import MyBirthdayCard from '../components/BirthdayCard'
import imgData from '../services/ImageData'




export default class BirthdayCard extends Component {
    pressButton =(value)=>{
        console.log(value)
        this.props.navigation.navigate('Birthday Card', { image:value, data: this.props.route.params.data } )
    }
    render() {
        const {data} = this.props.route.params;
        const datas = imgData.map(img=>(
            <View key={img.id} style={styles.container} >
                <MyBirthdayCard source={img.image} press={() => this.pressButton(img.image)} />
            </View>
        ))
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../app/assets/bday.jpg')}>
                <Container >
                    <View >
                        <Text style={styles.header}>Pick Your Preferred Card</Text>
                        {/* <Text style={styles.header}>{data.name}</Text> */}
                    </View>
                    <KeyboardAvoidingView>
                        <ScrollView >
                            {datas}
                        </ScrollView>
                    </KeyboardAvoidingView>
                        
                </Container>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        // alignItems: 'flex-end',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection:'row',
        marginRight:20,
        flexWrap:'wrap'
    },
    header:{
        fontSize: 20,
        fontStyle:'italic',
         marginTop: 10, 
         width: 250, 
         height: 50, 
         padding: 10, 
         fontWeight: 'bold', 
        color: 'purple',
        justifyContent: 'center',
        alignContent: 'center'
    }
});
