import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const role = useSelector((state) => state.user.account.role);

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleSignin = () => {
    navigate('/register');
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

            {role === 'Admin' ? (
              <NavLink to="/admin" className="nav-link">
                Admin
              </NavLink>
            ) : null}

            <NavLink to="/introduce" className="nav-link">
              Giới thiệu
            </NavLink>
            <NavLink to="/privacy" className="nav-link">
              Chính sách
            </NavLink>
          </Nav>
          <Nav>
            {isAuthenticated === false ? (
              <>
                <button className="btn-login" onClick={() => handleLogin()}>
                  Đăng nhập
                </button>
                <button className="btn-signin" onClick={() => handleSignin()}>
                  Đăng ký
                </button>
              </>
            ) : (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="./editprofile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Đăng xuất</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
