import './Editprofile.css';
import React, { useState } from 'react';

function Uploadimg() {
  const uploadInput = document.getElementById('upload-input');
  const uploadedImage = document.getElementById('uploaded-image');
  uploadInput.addEventListener('change', (e) => {
    const file = uploadInput.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = event.target.result;
      uploadedImage.src = imageData;
    };
    reader.readAsDataURL(file);
  });
}

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
  };

  const handleSave = () => {
    const validationErrors = validateProfile(profile);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Thực hiện hành động lưu dữ liệu
      console.log('Profile saved', profile);
      // Reset lại errors sau khi lưu thành công
      setErrors({});
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
          <div className="right-container">
            <div className="change">
              <div style={{ margin: '50% 0' }}>
                <label htmlFor="upload-input" className="upload-button" onClick={Uploadimg}>
                  Change
                </label>
              </div>
            </div>
            <div>
              <div className="image-upload-container">
                <div className="image-preview">
                  <img src="" alt="" id="uploaded-image" />
                </div>
                <div className="upload-actions">
                  <input type="file" id="upload-input" />
                </div>
              </div>
              <div className="right-item" style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  style={{ width: 30, height: 40, marginRight: 15 }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAL5JREFUSEvllLEJAkEQRd8FtmAoGBmZX2QLdqE1WIIlaCEWcJGxNqCpLRgoIyOsBy5/XA6EnWRZmPlv5i+zDQNHM7A+9QFWbuletTZiUQt0LrwAjgpEBYyBM2CnxQ2Y+5nlKICRd24TpGET2CT3HEEB7IC3930te4t1KSCtf/hFaeyVKie6cBFAKQ7npBOEi794/6FTH0BZ3iKL/htwBSZKi0LOBZj2F20JbIGZIJBLOQEb4PDLJofZ0a+iQsAT35YkGWEb0lUAAAAASUVORK5CYII="
                />
                <p className="p-upload">Upload CCCD</p>
              </div>
            </div>
          </div>
        </div>

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
