import React, { Text, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthStack from './stack_navi/auth.stack';
import ToDoStack from './stack_navi/todo.stack';
import { useSelector, useDispatch } from 'react-redux'
import { loginInit } from '../thunk/auth.thunk'

const MainNavigation = (props) => {
    const { userData, token } = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loginInit())
        console.log("userData?.Token", token);
    }, [])
    return (
        <NavigationContainer>
            <StatusBar />
            {
                token === null ?
                    <AuthStack /> :
                    <ToDoStack />
            }
        </NavigationContainer>
    )

}

export default MainNavigation