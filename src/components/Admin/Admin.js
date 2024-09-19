import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
const Admin = (props) => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
