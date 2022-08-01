
/* eslint-disable prettier/prettier */
import UsersLoadService from "../api/methods/users.service"
import actions from "./../redux/actions/user_list.action"

//import action
export const usersList = (token) => (dispatch) => {
    console.log("TOKEN", token);
    UsersLoadService.login(token)
        .then((response) => {
            console.log(response.data)
            dispatch(actions.getUsers(response.data))
        }
        )
        .catch((error) => console.log(error.message));

}