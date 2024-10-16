import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import { Outlet, useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation(); // Access location object
  const { usename, status } = location.state || {};
  console.log('check sa', status);
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
