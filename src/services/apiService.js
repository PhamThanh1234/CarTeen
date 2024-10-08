import axios from '../utils/axiosCustomize';
const postCreateNewUser = (email, password, username, role) => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('username', username);
  data.append('role', role);
  return axios.post('baseURL', data); // sửa lại link giống trên posman để chạyk
};

const getAllUser = () => {
  return axios.get('baseURL'); // sửa lại link giống trên posman để chạy chức năng này
};
const postUpdateUser = (username, role, id) => {
  const data = new FormData();
  data.append('id', id);
  data.append('username', username);
  data.append('role', role);
  return axios.put('baseURL', data); // sửa lại link giống trên posman để chạyk
};

const deleteUser = (userID) => {
  return axios.delete('baseURL', { data: { id: userID } }); // sửa lại link giống trên posman để chạy chức năng này xóa user dựa trên id
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`baseURL?page=${page}&limit=${limit}`); //phân trang chia theo limit và page
};
const postLogin = (email, password) => {
  return axios.post(`baseURL`, { email: email, password: password });
};
const postRegister = (email, password, username) => {
  return axios.post(`baseURL`, { email: email, password: password, username: username });
};

export {
  postCreateNewUser,
  getAllUser,
  postUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
};
