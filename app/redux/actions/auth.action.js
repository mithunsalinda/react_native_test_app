import actionTypes from '../actions/types'
const authAction = (userData) => ({
    type: actionTypes.LOGIN_USER,
    payload: userData.data
})

const logoutAction = () => ({
    type: actionTypes.LOG_OUT,
})

const loginInit = (key) => ({
    type: actionTypes.LOGIN_INIT,
    payload: key
})


const loginError = (error) => ({
    type: actionTypes.LOGIN_ERRORS,
    payload: error
})
export default {
    authAction,
    logoutAction,
    loginInit,
    loginError
}