import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../Context/authcontext';

const Header = (props) => {
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignin = () => {
    navigate('/register');
  };
  const handleLogout = () => {
    localStorage.clear('token');
    setAuth({
      isAuthenticated: false,
      user: {
        role: '',
        name: '',
      },
    });
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className="navbar-brand" to="/">
          CarTeen
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>{' '}
            <NavLink className="nav-link" to="/listbike">
              Xe
            </NavLink>
            {/* {auth?.user?.role === 'Admin' ? (
              <NavLink to="/admin" className="nav-link">
                Admin
              </NavLink>
            ) : null} */}
            <NavLink to="/admin" className="nav-link">
              Admin
            </NavLink>
            <NavLink to="/introduce" className="nav-link">
              Giới thiệu
            </NavLink>
            <NavLink to="/privacy" className="nav-link">
              Chính sách
            </NavLink>
          </Nav>
          <Nav>
            {auth.isAuthenticated === false && auth.user.name === '' ? (
              <>
                <button className="btn-login" onClick={() => handleLogin()}>
                  Đăng nhập
                </button>
                <button className="btn-signin" onClick={() => handleSignin()}>
                  Đăng ký
                </button>
              </>
            ) : (
              <NavDropdown title={auth.user.name ?? 'Account'} id="basic-nav-dropdown">
                <NavDropdown.Item href="/editprofile">Thông tin cá nhân</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href="/" onClick={() => handleLogout()}>
                  Đăng xuất
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
