import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function RegisterScreen
**/
export const RegisterScreen = (props) => {

    const { container } = styles
    return (
        <View style={container}>
            <Text>RegisterScreen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})