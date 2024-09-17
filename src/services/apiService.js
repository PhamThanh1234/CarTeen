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

export { postCreateNewUser, getAllUser };
