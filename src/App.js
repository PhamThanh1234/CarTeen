import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import 'antd/dist/reset.css';
import { reloadUser } from './services/apiService.js';
import { AuthContext } from './components/Context/authcontext.jsx';
import { Spin } from 'antd';
const App = () => {
  const { setAuth, appLoading, setAppLoading } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const fetchAccount = async () => {
        setAppLoading(true);
        const data = await reloadUser(token);
        if (data) {
          setAuth({
            isAuthenticated: true,
            user: {
              role: data?.role ?? '',
              name: data?.username ?? '',
            },
          });
        } else {
          setAppLoading(false);
        }
        setAppLoading(false);
      };
      fetchAccount();
    }
  });

  return (
    <div className="app-container">
      {appLoading === true ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
          <div className="header-container">
            <Header />
          </div>
          <div className="main-container">
            <div className="sidenav-container"></div>
            <div className="app-content">
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
