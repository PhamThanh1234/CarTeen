import './Profile.css';
import { getMyinfo, updateMe, getInvoice } from '../../services/apiService';
import { useEffect, useState } from 'react';

import Bill from './Bill';
import Profile from './Profile';

const EditProfile = () => {
  const initialProfile = {
    id: '',
    fullName: '',
    username: '',
    name: '',
    phone: '',
    address: '',
    sex: '',
    cccd: '',
    email: '',
  };

  const [orders, setOrders] = useState([]);

  const [profile, setProfile] = useState(initialProfile);

  useEffect(() => {
    fetchMyInfo();
  }, []);

  useEffect(() => {
    if (profile.id) fetchOrders();
  }, [profile.id]);

  const fetchMyInfo = async () => {
    const token = localStorage.getItem('token');
    const res = await getMyinfo(token);
    if (res) setProfile(res);
  };

  const fetchOrders = async () => {
    const res = await getInvoice(profile.id);
    setOrders(Array.isArray(res) ? res : []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    const res = await updateMe(
      profile.id,
      profile.fullName,
      profile.username,
      profile.name,
      profile.phone,
      profile.address,
      profile.sex,
      profile.cccd,
      token
    );
    if (res) {
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/4 bg-gray-100 p-4 profile">
        <div className="text-center mb-4">
          <img src="https://placehold.co/100x100" alt="User avatar" className="mx-auto mb-2" />
          <p className="font-bold">{profile.fullName}</p>
        </div>
        <ul>
          <li className="mb-2">
            <a href="#pro" className="flex items-center no-underline">
              <i className="fas fa-user mr-2" />
              <div>
                <p className="font-bold mt-3">Thông tin tài khoản</p>
              </div>
            </a>
          </li>
          <li className="mb-2">
            <a href="#pro" className="flex items-center  no-underline ">
              <i className="fas fa-history mr-2" />
              <div>
                <p className="font-bold mt-3">Hóa đơn</p>
              </div>
            </a>
          </li>

          <li className="mb-2">
            <a href="/" className="flex items-center no-underline">
              <i className="fas fa-sign-out-alt mr-2"></i>
              <div>
                <p className="font-bold mt-3">Về trang chủ</p>
              </div>
            </a>
          </li>
          {/* Các mục khác */}
        </ul>
      </div>
      <div className="w-3/4 p-8 display float-right">
        <Profile profile={profile} onChange={handleChange} onSave={handleSave} />
        <Bill orders={orders} />
      </div>
    </div>
  );
};

export default EditProfile;
