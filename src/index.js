import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import User from './components/User/User';
import HomePage from './components/Home/HomePage';
import Login from './components/Auth/Login';
import Signin from './components/Auth/Signin';
import EditProfile from './components/EditProfile/Editprofile';
import Introduce from './components/Introduce/Introduce';
import Privacy from './components/Privacy/Privacy';
import Admin from './components/Admin/Admin';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageUser from './components/Admin/Content/ManageUser';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
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
      <Route path="/signin" exact element={<Signin />} />
      <Route path="/editprofile" exact element={<EditProfile />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
