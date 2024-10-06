import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { postLogin } from '../../services/apiService';
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error('Email is not valid');
      return;
    }

    if (!password) {
      toast.error('Password is not valid');
    }
    let data = await postLogin(email, password);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      localStorage.setItem('token', data.token);
      navigate('/');
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="content-form">
        <form action="">
          <div className="container-form">
            <h1 className="title-signin">Đăng nhập</h1>
            <p>Đăng nhập để tiếp tục thực hiện chức năng</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="input-login"
              type={'email'}
              placeholder="Nhập Email"
              name="email"
              required=""
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="psw">
              <b>Mật Khẩu</b>
            </label>
            <input
              className="input-login"
              type={'password'}
              placeholder="Nhập Mật Khẩu"
              name="psw"
              required=""
              id="psw"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <label>
              <input
                type="checkbox"
                defaultChecked="checked"
                name="remember"
                style={{ marginBottom: 15 }}
              />{' '}
              Nhớ Đăng Nhập
            </label>
            <div>
              <span className="span">Bạn chưa có tài khoản ?</span>
              <a href="/signin">
                <span className="span-signin">Đăng ký ngay</span>
              </a>
            </div>
            <div className="clearfix">
              <button type="submit" className="signupbtn" onClick={() => handleLogin()}>
                Đăng nhập
              </button>
            </div>
            <div className="text-center text-gohome">
              <span
                className="gotohome"
                onClick={() => {
                  navigate('/');
                }}
              >
                {' '}
                &#60;&#60; Go to Homepage
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
