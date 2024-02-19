import axios, { AxiosInstance } from 'axios';

const axiosConfig: AxiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/',
//   headers: {
//     'Authorization': 'Bearer YourAccessToken',
//     'Content-Type': 'application/json',
//   },
});

export default axiosConfig;
