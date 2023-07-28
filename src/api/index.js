import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchUsers = () => axios.get(`${url}/user`);
export const createUser = (user) => axios.post(`${url}/user`,user);
export const signInUser = (user) => axios.post(`${url}/signin`,user);