import axios from 'axios';

const url = '/user';

export const fetchUsers = () => axios.get(url);
export const createUser = (user) => axios.post(url,user);