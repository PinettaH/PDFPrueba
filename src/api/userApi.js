import axios from 'axios';

// const { VITE_API_URL } = getEnvVariables()
// const URL = 'http://acceso.nubecenter.com.ar:11704/api'
const URL = 'http://localhost:4000/api'

const userApi = axios.create({
    baseURL: URL
});

// Todo: configurar interceptores
userApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default userApi;



