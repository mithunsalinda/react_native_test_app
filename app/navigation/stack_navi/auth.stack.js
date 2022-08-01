
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from "../../screens/account/login.screen"
const Stack = createNativeStackNavigator();
const AuthStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )

}

export default AuthStack