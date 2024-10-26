import { useContext } from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../Context/authcontext';

const Admin = (props) => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      {auth.user.role === 'ADMIN' ? (
        <>ERROR</>
      ) : (
        <div className="admin-container">
          <div className="admin-sidebar">
            <SideBar />
          </div>
          <div className="admin-content">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
