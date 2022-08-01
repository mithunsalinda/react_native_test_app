/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import actionTypes from '../actions/types';

const initialState = {
    users: []
};


const usersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_USERS:
            return {
                ...state,
                users: payload,
            }

        default: return state;
    }
}

export default usersReducer;