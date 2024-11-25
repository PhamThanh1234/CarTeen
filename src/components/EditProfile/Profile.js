import React from 'react';

const Profile = ({ profile, onChange, onSave }) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Thay đổi thông tin cá nhân</h2>
      <div className="border p-4 rounded">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">Họ và tên </label>
            <input
              type="text"
              className="w-full border rounded p-2"
              name="fullName"
              value={profile.fullName || ''}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="block mb-1">Username</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              name="username"
              value={profile.username || ''}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">Số điện thoại</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              name="phone"
              value={profile.phone || ''}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              name="email"
              value={profile.email || ''}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1">Giới tính</label>
            <select
              className="w-full border rounded p-2"
              name="sex"
              value={profile.sex || ''}
              onChange={onChange}
            >
              <option value="Nữ">Nữ</option>
              <option value="Nam">Nam</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Địa chỉ</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            name="address"
            value={profile.address || ''}
            onChange={onChange}
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2" onClick={onSave}>
            Lưu lại
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
