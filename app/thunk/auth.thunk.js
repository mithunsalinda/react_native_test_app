
/* eslint-disable prettier/prettier */
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import AuthService from "../api/methods/auth.service"
import actions from "./../redux/actions/auth.action"

//import action
export const useLogin = ({ userName, password }) => (dispatch) => {
    console.log('userName1111', userName, 'userName', password);
    AuthService.login(userName, password)
        .then((response) => {
            // console.log(response.data)

            dispatch(actions.authAction(response.data))
            dispatch(actions.loginError(response.data))
            const jsonValue = JSON.stringify(response.data.Token)
            //AsyncStorage.setItem('@userData', jsonValue)
        }
        )
        .catch((error) => {
            console.log(error.message)
            //dispatch(actions.loginError(error.message))
        });

}

export const logOut = () => async (dispatch) => {
    //Log call must be developed. for the moment clearing redux.
    await AsyncStorage.removeItem('@userData');
    dispatch(actions.logoutAction());

}

export const loginInit = () => async (dispatch) => {
    let userData = await AsyncStorage.getItem('@userData');
    //dispatch(actions.authAction(userData))
    dispatch(actions.loginInit(userData));
}