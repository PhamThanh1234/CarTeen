import './Editprofile.css';
import React, { useState } from 'react';

function EditProfile() {
  const initialProfile = {
    name: '',
    phoneNumber: '',
    email: '',
    address: '',
    cccd: '',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setProfile(initialProfile);
    setErrors({});
    setSuccessMessage('');
  };

  const handleSave = async () => {
    const validationErrors = validateProfile(profile);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('/api/update-profile', {
          method: 'PUT', // Sử dụng 'PUT' hoặc 'PATCH' tùy vào thiết kế API
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profile),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage('Thông tin người dùng đã được cập nhật thành công!');
          setErrors({});
        } else {
          setErrors({ apiError: data.message || 'Cập nhật thất bại, vui lòng thử lại.' });
        }
      } catch (error) {
        setErrors({ apiError: 'Có lỗi xảy ra khi gửi yêu cầu, vui lòng thử lại.' });
      }
    }
  };

  const validateProfile = (profile) => {
    const errors = {};
    if (!profile.name) errors.name = 'Name is required';
    if (!profile.phoneNumber) errors.phoneNumber = 'Phone number is required';
    else if (!/^\d+$/.test(profile.phoneNumber))
      errors.phoneNumber = 'Phone number must be a number';
    if (!profile.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(profile.email)) errors.email = 'Email is invalid';
    if (!profile.address) errors.address = 'Address is required';
    if (!profile.cccd) errors.cccd = 'CCCD is required';
    else if (!/^[0-9]{9}$|^[0-9]{12}$/.test(profile.cccd)) errors.cccd = 'CCCD is invalid';
    return errors;
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="content-editprofile">
        <div className="header-content">
          <a href="/" className="text-home">
            Home
          </a>{' '}
          <span>|</span>
          <a href="./" className="text-home">
            My profile
          </a>
        </div>
        <div className="title">
          <h2 style={{ textAlign: 'center', margin: 30 }}>My profile</h2>
        </div>
        <div className="main-content">
          <div className="container-editprofile">
            <div className="label">Name</div>
            <div>
              <input
                className="input"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="label">Phone number</div>
            <div>
              <input
                className="input"
                type="tel"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
            </div>
            <div className="label">Email</div>
            <div>
              <input
                className="input"
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="label">Address</div>
            <div>
              <input
                className="input"
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
              {errors.address && <div className="error">{errors.address}</div>}
            </div>

            <div className="label">CCCD(Căn Cước Công Dân)</div>
            <div>
              <input
                className="input"
                type="text"
                name="cccd"
                value={profile.cccd}
                onChange={handleChange}
              />
              {errors.cccd && <div className="error">{errors.cccd}</div>}
            </div>
          </div>
          <div className="right-container">{/* Image upload components */}</div>
        </div>

        {successMessage && <p className="success-message">{successMessage}</p>}
        {errors.apiError && <p className="error-message">{errors.apiError}</p>}

        <div className="footer-container">
          <div className="button-container">
            <button className="button" onClick={handleSave}>
              Save
            </button>
            <button className="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
