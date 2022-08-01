import actionTypes from '../actions/types'
const getUsers = (users) => ({
    type: actionTypes.GET_USERS,
    payload: users.data
})

export default {
    getUsers
}