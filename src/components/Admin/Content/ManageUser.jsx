import ModalCreatUser from './ModalCreatUser';
import ModalUpdateUser from './ModalUpdateUser';
import { useState, useEffect  } from 'react';
import './ManageUser.css';
import { getAllUser, getUserWithPaginate } from '../../../services/apiService';
import ModalDeleteUser from './ModalDeleteUser';

import { Spin } from 'antd';
import TableUser from './TableUser';

const ManageUser = () => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setshowModalDeleteUser] = useState(false);
  const [dataUpdate, setdataUpdate] = useState('');
  const [dataDelete, setdataDelete] = useState('');
  const LIMIT_USER = 6;
  const token = localStorage.getItem('token');
  const [appLoading, setAppLoading ] = useState(false);
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchListuser();
    
  }, []);
  const fetchListuser = async () => {
    setAppLoading(true)
    const res = await getAllUser(token);
    if (res) {
      setListUser(res);
      
    }
    setAppLoading(false)
  };
  const fetchListuserWithPaginate = async (page) => {
    const res = await getUserWithPaginate(page, LIMIT_USER);
    if (res) {
      setListUser(res);
   
    }
  };
  const handleClickBtnUpdate = (user) => {
    setdataUpdate(user);
    setshowModalUpdateUser(true);
  };
  const handleClickBtnDelete = (user) => {
    setdataDelete(user);
    setshowModalDeleteUser(true);
  };
  const resetUpdateData = () => {
    setdataUpdate('');
  };

  return (
    <div className="manageuser-container">
      <div className="title">
        <h1>ManageUser Page</h1>
      </div>

      <div className="user-content">
        <div className="btn-addnew">
          <button className="btn btn-primary" onClick={() => setshowModalCreateUser(true)}>
            Add new user
          </button>
        </div>

        
        {appLoading === true ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Spin />
        </div>
      ) : (
        <>
         <div className="table-user">
          <TableUser
          listUser={listUser}
          handleClickBtnUpdate={handleClickBtnUpdate}
          handleClickBtnDelete={handleClickBtnDelete}
          fetchListuser= {fetchListuser}
       
        />
        </div>
        </>
      )}
        
       
        
        <ModalCreatUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
          fetchListuserWithPaginate={fetchListuserWithPaginate}
          
          fetchListuser={fetchListuser}
          
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setshowModalUpdateUser}
          dataUpdate={dataUpdate}
          
          resetUpdateData={resetUpdateData}
          
          fetchListuser={fetchListuser}
       
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setshowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListuser={fetchListuser}
          setListUser={setListUser}
          
        />
      </div>
    </div>
  );
};

export default ManageUser;
