import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextField, InputButton, QuickLinks } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useLogin } from '../../thunk/auth.thunk'
/**
* @author
* @function LoginScreen
**/
export const LoginScreen = ({ navigation, props }) => {

    const { container } = styles
    const [txtUserName, setUserName] = useState('');
    const [txtPassword, setPassword] = useState('');
    const { token, loginError } = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    const login = () => {
        console.log(txtUserName + '___' + txtPassword)
        dispatch(useLogin({ userName: txtUserName, password: txtPassword }))
    }
    useEffect(() => {
    }, [txtUserName])

    return (
        <View style={container}>
            {loginError?.message !== '' && <Text style={styles.error}> {loginError?.message} </Text>}
            <TextField
                label='User Name'
                onChange={(text) => setUserName(text)}
                value={txtUserName}
            />
            <TextField
                label='Password'
                isInputScure={true}
                onChange={(text) => setPassword(text)}
                value={txtPassword}
            />
            <InputButton
                buttonName='Sign IN'
                onPress={() => login()}
            />

            <QuickLinks label='Sign Up /  Register' onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    }
    ,
    error: {
        color: 'red',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    }
})