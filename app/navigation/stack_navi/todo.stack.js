
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from "../../screens/homeScreen/index"
const Stack = createNativeStackNavigator();
const ToDoStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Dashboard} />
        </Stack.Navigator>
    )


}

export default ToDoStack