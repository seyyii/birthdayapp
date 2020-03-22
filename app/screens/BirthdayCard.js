import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import Container from '../components/container'
import MyBirthdayCard from '../components/BirthdayCard'
import imgData from '../services/ImageData'




export default class BirthdayCard extends Component {
    pressButton =(value)=>{
        console.log(value)
    }
    render() {
        const {data} = this.props.route.params;
        const datas = imgData.map(img=>(
            <View key={img.id} style={styles.container} >
                <MyBirthdayCard  source={img.image} press={()=>this.pressButton(img.tmp)} />
            </View>
        ))
        return (
            <ImageBackground style={{ width: '100%', height: '100%' }} source={require('../../app/assets/birthday.gif')}>
                <Container >
                    <View >
                        <Text style={styles.header}>Choose a Card</Text>
                        {/* <Text style={styles.header}>{data.name}</Text> */}
                    </View>
                    <ScrollView >
                        {datas}
                    </ScrollView>
                        
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
        flexWrap:'nowrap'
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
