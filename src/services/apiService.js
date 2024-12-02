import axios from '../utils/axiosCustomize';
import axiosutral from '../utils/axiosInstance';
const postCreateNewUser = (email, password, username, role) => {
  const data = { email, password, username, role };
  return axios.post('/addUser', data);
};
const getAllBikes = () => {
  return axios.get('/motorbikes');
};
const getAllUser = (token) => {
  return axios.get('/users', token);
};
const postUpdateUser = (username, role, id) => {
  const data = { id, username, role };
  return axios.put(`/updateUser/${id}`, data);
};

const deleteUser = (userID) => {
  return axios.delete(`/delete/${userID}`, { data: { id: userID } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`baseURL?page=${page}&limit=${limit}`);
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
  return axios.get('/myInfo', token);
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
const getInvoiceDetail = (id) => {
  const token = localStorage.getItem('token');
  return axios.get(`invoiceDetail/${id}`, token);
};
const postUpdateBike = (id, type, name, location, licensePlate, price) => {
  const token = localStorage.getItem('token');
  return axios.put(`motorbikes/updateMotorbike/${id}`, token);
};

const deleteBike = (id) => {
  const token = localStorage.getItem('token');
  return axios.delete(`motorbikes/deleteMotorbike/${id}`, token);
};
const postCreateNewBike = (motobikeID, type, name, location, licensePlate, price, image) => {
  const token = localStorage.getItem('token');
  const Form = new FormData();

  Form.append(
    'motorbikeData',
    JSON.stringify({
      motorbikeId: motobikeID,
      typeId: type,
      locationName: location,
      licensePlate: licensePlate,
      motorbikeName: name,
      rentalPrice: price,
    })
  );

  Form.append('imageFile', image);

  return axios.post('/motorbikes/addMotorbike', Form, token);
};

export {
  createInvoice,
  postCreateNewBike,
  deleteBike,
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
  getInvoiceDetail,
  postUpdateBike,
};
