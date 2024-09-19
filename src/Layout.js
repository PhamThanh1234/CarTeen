import User from './components/User/User';
import HomePage from './components/Home/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EditProfile from './components/EditProfile/Editprofile';
import Introduce from './components/Introduce/Introduce';
import Privacy from './components/Privacy/Privacy';
import Admin from './components/Admin/Admin';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageUser from './components/Admin/Content/ManageUser';
import App from './App';
import { Route, Routes } from 'react-router-dom';
const Layout = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="introduce" exact element={<Introduce />} />
          <Route path="users" exact element={<User />} />

          <Route path="privacy" exact element={<Privacy />} />
        </Route>
        <Route path="/admin" exact element={<Admin />}>
          <Route index element={<DashBoard />} />
          <Route path="manageuser" exact element={<ManageUser />} />
        </Route>
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/editprofile" exact element={<EditProfile />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Layout;
