/* eslint-disable prettier/prettier */
import apiClient from "../apiConfig";

class AuthService {
    login = (email, password) => apiClient().post('/authaccount/login', {
        email: email,
        password: password,
    });
}
export default new AuthService();