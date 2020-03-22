import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        const { image } = this.props.route.params;
        const { data } = this.props.route.params;
        return (
            <ImageBackground style={{ width: '100%', height: '100%', borderWidth:'10' }} source={image}>
                <Text style={styles.header}>From {data.Sname},</Text>
                <Text style={styles.container}>{data.message}</Text>
                <Text style={styles.footer}>To {data.Rname}</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin:20,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        flexDirection: 'row',
        marginRight: 20,
        flexWrap: 'wrap',
        color:'brown',
        fontSize:30,
        width: 350,
        height: 250,
        fontWeight: 'bold',
        fontStyle:'italic'
    },
    header: {
        fontSize: 30,
        marginTop: 30,
        width: 250,
        height: 50,
        padding: 10,
        fontWeight: 'bold',
        color: 'red'
    },
    footer: {
        fontSize: 30,
        width: 250,
        height: 50,
        padding: 10,
        justifyContent:'center',
        alignItems:'center',
        fontWeight: 'bold',
        color: 'red',
        marginLeft:150
    }
});
