import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import './Login.css';

const Signin = (props) => {
  const [email, setEmail] = useState(''); // lấy email khi nhập vào
  const [password, setPassword] = useState(''); //lấy password khi nhập vào
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Mật khẩu và Nhập lại mật khẩu không khớp.');
      return;
    }
    // Hàm useState ở trên là để lấy giữ liệu thay đổi email,password, tạo bảng giữ liệu
    const formData = {
      email: email,
      password: password,
    };
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="login-container">
      <div className="content-form col-5 mx-auto">
        <form onSubmit={handleSignup}>
          <div className="container-form">
            <h1>Form Đăng Ký</h1>
            <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
            <hr />
            <label htmlFor="email">
              <b>UserName</b>
            </label>
            <input
              className="input-login"
              type="text"
              placeholder="Nhập username"
              name="text"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="input-login"
              type="email"
              placeholder="Nhập Email"
              name="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="psw">
              <b>Mật Khẩu</b>
            </label>
            <input
              className="input-login"
              type="password"
              placeholder="Nhập Mật Khẩu"
              name="psw"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label htmlFor="psw-repeat">
              <b>Nhập Lại Mật Khẩu</b>
            </label>
            <input
              className="input-login"
              type="password"
              placeholder="Nhập Lại Mật Khẩu"
              name="psw-repeat"
              required
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <div className="clearfix">
              <button type="submit" className="signupbtn">
                Đăng ký
              </button>
            </div>
          </div>
        </form>
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
  );
};

export default Signin;
