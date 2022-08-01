import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'


/**
* @author
* @function TextField
**/
export const TextField = (props) => {
    const { label, isInputScure = false, onChange } = props

    return (
        <View style={styles.container}>
            {/* <Text>{label}</Text> */}
            <TextInput
                style={styles.input}
                placeholder={label}
                secureTextEntry={isInputScure}
                onChangeText={onChange}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: '#CCC',
        borderWidth: 1,
        color: '#000',
        width: 300,
        marginBottom: 10,
        paddingLeft: 10,
        borderRadius: 10,
        backgroundColor: '#f2f2f2'
    }
})