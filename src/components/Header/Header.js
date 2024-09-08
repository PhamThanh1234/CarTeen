import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignin = () => {
    navigate('/signin');
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
            </NavLink>
            <NavLink to="/users" className="nav-link">
              Users
            </NavLink>
            <NavLink to="/introduce" className="nav-link">
              Giới thiệu
            </NavLink>
            <NavLink to="/privacy" className="nav-link">
              Chính sách
            </NavLink>
          </Nav>
          <Nav>
            <button className="btn-login" onClick={() => handleLogin()}>
              Đăng nhập
            </button>
            <button className="btn-signin" onClick={() => handleSignin()}>
              Đăng ký
            </button>
          </Nav>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="./editprofile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Đăng xuất</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
