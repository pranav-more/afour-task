import axios from 'axios';

const url = 'http://localhost:3002/givenData';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

// post api

export const addUser = async (user) => {
    return await axios.post(url, user);
}

// edit user 
export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user)
}

// delete 
export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}