/* eslint-disable prettier/prettier */
import apiClient from "../apiConfig";

class UsersLoadService {
    login = (token) => apiClient().get('/users?page=1', {
        headers: { Authorization: `Bearer ${token}` },
        'Accept-Encoding': 'gzip,deflate',
    });
}
export default new UsersLoadService();
