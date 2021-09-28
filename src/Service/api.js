import axios from 'axios';

const url = 'http://localhost:3002/givenData';

export const getData = () => {
    return axios.get(url);
}

// post api

export const addUser = async(user) => {
    return await axios.post(url, user);
}