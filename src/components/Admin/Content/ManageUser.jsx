import ModalCreatUser from './ModalCreatUser';
import ModalUpdateUser from './ModalUpdateUser';
import { useState, useEffect } from 'react';
import './ManageUser.css';
import { getAllUser, getUserWithPaginate } from '../../../services/apiService';
import ModalDeleteUser from './ModalDeleteUser';
import TableUserPaginate from './TableUserPaginate';

const ManageUser = () => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setshowModalDeleteUser] = useState(false);
  const [dataUpdate, setdataUpdate] = useState('');
  const [dataDelete, setdataDelete] = useState('');
  const LIMIT_USER = 6;
  const [currentPage, setcurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [listUser, setListUser] = useState([
    {
      id: 17,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'ADMIN',
    },
    {
      id: 18,
      username: 'thanh',
      email: 'thanh@example.com',
      role: 'ADMIN',
    },
    {
      id: 20,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
    },
    {
      id: 21,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
    },
    {
      id: 22,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
    },
    {
      id: 23,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
    },
    {
      id: 24,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
    },
    {
      id: 25,
      username: 'John Doe',
      email: 'johndoe@example.com',
      role: 'User',
    },
    {
      id: 26,
      username: 'John Doeweweww',
      email: 'johuuuuundoe@example.com',
      role: 'User',
    },
    {
      id: 27,
      username: 'John Doe',
      email: 'johffgfgndoe@example.com',
      role: 'User',
    },
    {
      id: 28,
      username: 'John Doe',
      email: 'johndhjjhjhoe@example.com',
      role: 'User',
    },
  ]);
  useEffect(() => {
    fetchListuser();
    // fetchListuserWithPaginate(1);
  }, []);
  const fetchListuser = async () => {
    const res = await getAllUser();
    if (res) {
      setListUser(res);
    }
  };
  const fetchListuserWithPaginate = async (page) => {
    const res = await getUserWithPaginate(page, LIMIT_USER);
    if (res) {
      setListUser(res);
      setPageCount(res);
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

        <div className="table-user">
          {/* <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
        </div>
        <TableUserPaginate
          listUser={listUser}
          handleClickBtnUpdate={handleClickBtnUpdate}
          handleClickBtnDelete={handleClickBtnDelete}
          fetchListuser= {fetchListuser}
          fetchListuserWithPaginate={fetchListuserWithPaginate}
          pageCount={pageCount}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        />
        <ModalCreatUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
          fetchListuserWithPaginate={fetchListuserWithPaginate}
          currentPage={currentPage}
          fetchListuser={fetchListuser}
          setcurrentPage={setcurrentPage}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setshowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListuserWithPaginate={fetchListuserWithPaginate}
          resetUpdateData={resetUpdateData}
          currentPage={currentPage}
          fetchListuser={fetchListuser}
          setcurrentPage={setcurrentPage}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setshowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListuser={fetchListuser}
          fetchListuserWithPaginate={fetchListuserWithPaginate}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
