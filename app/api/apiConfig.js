/* eslint-disable prettier/prettier */
import axios from "axios";
const apiClient = () => {
    //console.log('axiosInstance', env.REACT_APP_API_URL);


    //tempary hardcode for time save. need to put this into env file and do the build config in the gradle file.
    const apiUrl = 'http://restapi.adequateshop.com/api';

    //console.log(process.env);
    const axiosInstance = axios.create({
        baseURL: apiUrl,
        responseType: "json",
    });
    //console.log('axiosInstance', REAT_APP_API_URL);
    return axiosInstance;

    axiosInstance.interceptors.request.use(function (config) {
        // Do something before request is sent
        console.log(config);
        return config;
    }, function (error) {
        // Do something with request error
        console.log(error);
        return Promise.reject(error);
    });

    axiosInstance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log(response);
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error);
        return Promise.reject(error);
    });
}




export default apiClient;