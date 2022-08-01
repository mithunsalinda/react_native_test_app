import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'


/**
* @author
* @function QuickLinks
**/
export const QuickLinks = (props) => {
    const { label, onPress } = props

    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <Text style={styles.quickText}>{label}</Text>
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    quickText: {
        paddingTop: 40
    }
})