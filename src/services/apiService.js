import axios from '../utils/axiosCustomize';
const postCreateNewUser = (email, password, username, role) => {
  const data = new FormData();
  data.append('email', email);
  data.append('password', password);
  data.append('username', username);
  data.append('role', role);
  return axios.post('/addUser', data); // sửa lại link giống trên posman để chạyk
};
const getAllBikes = () => {
  return axios.get('/motorbikes'); // sửa lại link giống trên posman để chạy chức năng này
};
const getAllUser = () => {
  return axios.get('/users'); // sửa lại link giống trên posman để chạy chức năng này
};
const postUpdateUser = (username, role, id) => {
  const data = new FormData();
  data.append('id', id);
  data.append('username', username);
  data.append('role', role);
  return axios.put('baseURL', data); // sửa lại link giống trên posman để chạyk
};

const deleteUser = (userID) => {
  return axios.delete(`/delete/${userID}`, { data: { id: userID } }); // sửa lại link giống trên posman để chạy chức năng này xóa user dựa trên id
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`baseURL?page=${page}&limit=${limit}`); //phân trang chia theo limit và page
};
const postLogin = (email, password) => {
  const data = { email, password };

  return axios.post(`/login`, data);
};

const getListBillCar = (motobikename, location, count) => {
  const data = { motobikename, location, count };

  return axios.get(`/motorbikes/motorbikeName-locationName`, data);
};
const postRegister = (email, password, username, confirmPassword) => {
  const data = { username, email, password, confirmPassword };
  return axios.post(`/register`, data);
};
const reloadUser = (token) => {
  return axios.get('/reloadUser', token);
};
const CreateInvoice = (motorbikeName, locationName, count, receiptDate, retalHours) => {
  const data = { motorbikeName, locationName, count, receiptDate, retalHours };
  return axios.post('/invoices/createInvoiceTest', data);
};
export {
  postCreateNewUser,
  getAllUser,
  postUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getAllBikes,
  getListBillCar,
  reloadUser,
  CreateInvoice,
};
