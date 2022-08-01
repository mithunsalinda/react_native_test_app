import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


/**
* @author
* @function InputButton
**/
export const InputButton = (props) => {
    const { buttonName, onPress } = props
    return (
        <TouchableOpacity style={styles.buttonPrimary} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonName}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    buttonPrimary: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        width: 300

    },
    buttonText: {
        color: '#FFF'
    }
})