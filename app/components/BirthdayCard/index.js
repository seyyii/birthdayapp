import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import Bstyles from '../MyButton/style'
import Pstyles from './style'



export default function MyBirthdayCard() {
    return (
        
            <TouchableHighlight style={Pstyles.button}
            activeOpacity= {0.85}
            underlayColor='red'
                >
            <Image style={{ width: 160, height: 200, borderRadius: 20 }} source={require('../../assets/birthday.jpg')} />
            </TouchableHighlight>
        
    )
}
