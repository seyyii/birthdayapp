import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import About from "./About";


function Name() {
    return (
        <View style={{ backgroundColor: 'blue'}}>
            <View style={{ padding: 30,  }}>
                <Text style={{ color: 'red', fontSize: 50 }}>About Me!</Text>

                
            </View>
            <About />
        </View>
    )
}

export default Name;