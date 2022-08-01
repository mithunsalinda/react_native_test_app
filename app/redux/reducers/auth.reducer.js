/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import actionTypes from '../actions/types';

const initialState = {
    token: null,
    userData: [],
    loginError: null
};


const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                token: payload?.Token || null,
                userData: payload,

            }
        case actionTypes.LOGIN_ERRORS:
            return {
                ...state,
                loginError: payload
            }
        case actionTypes.LOG_OUT:
            return {
                ...initialState,
                token: null
            }
        case actionTypes.LOGIN_INIT:
            return {
                token: payload,
                loginError: ''
            }
        default: return state;
    }
}

export default authReducer;