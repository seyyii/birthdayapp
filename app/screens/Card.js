import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'

export default class Card extends Component {
    render() {
        const { image } = this.props.route.params;
        const { data } = this.props.route.params;
        return (
            <ImageBackground style={{ width: '100%', height: '100%', borderWidth:'10' }} source={image}>
                <Text style={styles.header}>From {data.Sname}</Text>
                <Text style={styles.container}>{data.message}</Text>
                <Text style={styles.footer}>To {data.Rname}</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        flexDirection: 'row',
        marginRight: 20,
        flexWrap: 'wrap',
        color: 'white',
        fontSize:25,
        width: 350,
        height: 300,
        // fontWeight: 'bold',
        fontStyle:'italic'
    },
    header: {
        fontSize: 30,
        marginTop: 30,
        width: 250,
        height: 50,
        padding: 10,
        // fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
        fontFamily: 'Helvetica',
    },
    footer: {
        fontSize: 30,
        width: 250,
        height: 50,
        padding: 10,
        justifyContent:'center',
        alignItems:'center',
        // fontWeight: 'bold',
        color: 'white',
        fontStyle:'italic',
        marginLeft:150
    }
});
