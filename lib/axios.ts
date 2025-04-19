import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.wokpa.app/api/listeners',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
