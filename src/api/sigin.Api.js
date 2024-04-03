import axios from 'axios';

// const { VITE_API_URL } = getEnvVariables()
const URL = 'http://acceso.nubecenter.com.ar:11703/'
// const URL = 'http://localhost:4000/api'

const siginApi = axios.create({
    baseURL: URL
});

// Todo: configurar interceptores
siginApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        // 'x-token': localStorage.getItem('token')
    }

    return config;
})


export default siginApi;



