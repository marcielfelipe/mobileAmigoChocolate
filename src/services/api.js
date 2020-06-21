import axios from 'axios';

const api= axios.create({
    baseURL:'https://apiamigo.herokuapp.com/'
});

export default api;
