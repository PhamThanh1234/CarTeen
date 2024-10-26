import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/Home/HomePage';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Introduce from './components/Introduce/Introduce';
import Privacy from './components/Privacy/Privacy';
import Admin from './components/Admin/Admin';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './components/Admin/Content/DashBoard';
import ManageUser from './components/Admin/Content/ManageUser';
import App from './App';

import ListBike from './components/ListBike/ListBike';
import Detail from './components/ListBike/Detail';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthWrapper } from './components/Context/authcontext';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'introduce',
        element: <Introduce />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'listbike',
        element: <ListBike />,
      },
      {
        path: 'listbike/detail/:id', // Cấu hình Route chi tiết xe
        element: <Detail />,
      },
    ],
  },
  {
    path: 'admin',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: 'manageuser',
        element: <ManageUser />,
      },
    ],
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
