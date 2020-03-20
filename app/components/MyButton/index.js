import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight, Alert } from 'react-native'
import Bstyles from './style'


export default class MyButton extends React.Component {
    buttonPress = ()=>{
        this.props.clickButton()
    }
    render() {
        return (
            <TouchableHighlight style={Bstyles.button}
                onPress={()=>this.buttonPress()}
                >
                <Text>{this.props.name}</Text>
            </TouchableHighlight>
        )
    }
}
