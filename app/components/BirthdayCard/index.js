import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image, TouchableOpacity } from 'react-native'
import Bstyles from '../MyButton/style'
import Pstyles from './style'
import imgData from '../../services/ImageData'




export default function MyBirthdayCard(props) {
    
    pressButton = () => {
        props.press()
    }
   
    return (
        
           <View style={Pstyles.button}>
               <TouchableOpacity onPress={()=>this.pressButton()}>
                <Image style={{ width: 150, height: 150, borderRadius: 20 }}{...props} />
               </TouchableOpacity>
           </View>
            
    )
}
