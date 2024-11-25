import axios from '../utils/axiosCustomize';
import axiosutral from '../utils/axiosInstance';
const postCreateNewUser = (email, password, username, role) => {
  const data = { email, password, username, role };
  return axios.post('/addUser', data); // sửa lại link giống trên posman để chạyk
};
const getAllBikes = () => {
  return axios.get('/motorbikes'); // sửa lại link giống trên posman để chạy chức năng này
};
const getAllUser = (token) => {
  return axios.get('/users', token); // sửa lại link giống trên posman để chạy chức năng này
};
const postUpdateUser = (username, role, id) => {
  const data = { id, username, role };
  return axios.put(`/updateUser/${id}`, data); // sửa lại link giống trên posman để chạyk
};

const deleteUser = (userID) => {
  return axios.delete(`/delete/${userID}`, { data: { id: userID } }); // sửa lại link giống trên posman để chạy chức năng này xóa user dựa trên id
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`baseURL?page=${page}&limit=${limit}`); //phân trang chia theo limit và page
};
const postLogin = (email, password) => {
  const data = { email, password };

  return axiosutral.post(`/login`, data);
};

const getListBillCar = (motorbikeName, locationName, count) => {
  const data = { motorbikeName, locationName, count };

  return axios.post(`/motorbikes/motorbikeName-locationName`, data);
};
const postRegister = (email, username, password, confirmPassword) => {
  const data = { username, email, password, confirmPassword };
  return axiosutral.post(`/register`, data);
};
const reloadUser = (token) => {
  return axios.get('/reloadUser', token);
};
const CreateInvoice = (motorbikeName, locationName, count, receiptDate, retalHours) => {
  const data = { motorbikeName, locationName, count, receiptDate, retalHours };
  return axios.post('/invoices/createInvoiceTest', data);
};
const countMotorbikeCanRent = (motorbikeName, locationName) => {
  const data = { motorbikeName, locationName };
  return axios.post('/motorbikes/countMotorbikeRent', data);
};

const getMyinfo = (token) => {
  return axios.get('/myInfo', token); // sửa lại link giống trên posman để chạy chức năng này
};
const updateMe = (id, fullName, username, name, phone, address, cccd, sex, token) => {
  const data = { id, fullName, username, name, phone, address, sex, cccd };
  console.log('Check api', data, token);
  return axios.put(`/me/${id}`, data, token);
};
const createInvoice = (data) => {
  const token = localStorage.getItem('token');
  return axios.post('/invoice/createInvoice', data, token);
};
const getInvoice = (id) => {
  const token = localStorage.getItem('token');
  return axios.get(`invoice/${id}`, token);
};
export {
  createInvoice,
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
  countMotorbikeCanRent,
  getMyinfo,
  updateMe,
  getInvoice,
};
