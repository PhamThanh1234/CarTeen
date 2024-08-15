
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import { Outlet, Link } from "react-router-dom";



const App = () => {
  return (
    
    <div className="app-container">
      <div className='header-container'>
        <Header/>
      </div>
      <div className='main-container'>
      <div className='sidenav-container'>

      </div>
      <div className='app-content'>
        <Outlet />
      </div>
      </div>
      
     
      
    </div>

  );
}

export default App;