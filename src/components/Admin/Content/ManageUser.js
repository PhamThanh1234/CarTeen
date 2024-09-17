import ModalCreatUser from './ModalCreatUser';
import TableUser from './TableUser';
import { useState, useEffect } from 'react';
import './ManageUser.css';
import { getAllUser } from '../../../services/apiService';

const ManageUser = () => {
  const [listUser, setListUser] = useState([
    {
      id: 17,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'ADMIN',
    },
    {
      id: 18,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'ADMIN',
    },
    {
      id: 20,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
    },
  ]);
  useEffect(() => {
    fetchListuser();
  }, []);
  const fetchListuser = async () => {
    const res = await getAllUser();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };

  return (
    <div className="manageuser-container">
      <div className="title">
        <h1>ManageUser Page</h1>
      </div>

      <div className="user-content">
        <div className="btn-addnew">
          <ModalCreatUser fetchListuser={fetchListuser} />
        </div>

        <div className="table-user">
          <TableUser listUser={listUser} />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
