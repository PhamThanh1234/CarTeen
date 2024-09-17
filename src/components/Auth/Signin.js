import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import './Login.css';

const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    const usernamePattern = /^[a-zA-Z0-9]{3,}$/;
    if (!usernamePattern.test(username)) {
      newErrors.username = 'Tên người dùng phải có ít nhất 3 ký tự và không chứa ký tự đặc biệt.';
    }

    const gmailPattern = /^[^\s@]+@gmail\.com$/;
    if (!gmailPattern.test(email)) {
      newErrors.email = 'Email phải có định dạng @gmail.com.';
    }

    if (password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu và Nhập lại mật khẩu không khớp.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    // Kiểm tra lỗi trước khi gửi yêu cầu
    if (!validateForm()) {
      return;
    }
    const formData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      const data = await response.json();

      if (response.ok) {
        alert('Đăng ký thành công!');
        navigate('/');
      } else {
        setErrors({ apiError: data.message || 'Đăng ký thất bại, vui lòng thử lại.' });
      }
    } catch (error) {
      setErrors({ apiError: 'Có lỗi xảy ra khi gửi yêu cầu, vui lòng thử lại.' });
    }
  };

  return (
    <div className="login-container">
      <div className="content-form col-5 mx-auto">
        <form onSubmit={handleSignup}>
          <div className="container-form">
            <h1>Form Đăng Ký</h1>
            <p>Xin hãy nhập biểu mẫu bên dưới để đăng ký.</p>
            <hr />
            <label htmlFor="username">
              <b>UserName</b>
            </label>
            <input
              className="input-login"
              type="text"
              id="username"
              placeholder="Nhập username"
              name="text"
              autoComplete="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            {errors.username && <p className="error-message">{errors.username}</p>}{' '}
            {/* Hiển thị lỗi username */}
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="input-login"
              placeholder="Nhập Email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}{' '}
            {/* Hiển thị lỗi email */}
            <label htmlFor="psw">
              <b>Mật Khẩu</b>
            </label>
            <input
              className="input-login"
              type="password"
              placeholder="Nhập Mật Khẩu"
              name="psw"
              id="psw"
              autoComplete="new-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}{' '}
            {/* Hiển thị lỗi password */}
            <label htmlFor="psw-repeat">
              <b>Nhập Lại Mật Khẩu</b>
            </label>
            <input
              className="input-login"
              type="password"
              id="psw-repeat"
              placeholder="Nhập Lại Mật Khẩu"
              name="psw-repeat"
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}{' '}
            {/* Hiển thị lỗi confirmPassword */}
            {errors.apiError && <p className="error-message">{errors.apiError}</p>}{' '}
            {/* Hiển thị lỗi từ API */}
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
          &#60;&#60; Go to Homepage
        </span>
      </div>
    </div>
  );
};

export default Signin;
