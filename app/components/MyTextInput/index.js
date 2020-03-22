import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './style'



export default function MyTextInput(props) {
    return (
        <View >
            <TextInput
                // style={styles.index}
                {...props}
            />
        </View>
    )
}
