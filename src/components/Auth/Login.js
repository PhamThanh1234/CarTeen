import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('api/login', {
        email: email,
        password: password,
      });
      if (response.data.success) {
        alert('Đăng nhập thành công!');

        navigate('/');
      } else {
        alert('Đăng nhập thất bại: ' + response.data.message);
      }
    } catch (error) {
      console.error('Có lỗi xảy ra:', error);
      alert('Đăng nhập thất bại, vui lòng thử lại.');
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
