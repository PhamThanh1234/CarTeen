import ModalCreatBike from './ModalCreatBike';
import ModalUpdateBike from './ModalUpdateBike';
import { useState, useEffect } from 'react';

import { getAllBikes, getUserWithPaginate } from '../../../services/apiService';
import ModalDeleteBike from './ModalDeleteBike';
import TableBike from './TableBike';
import { Spin } from 'antd';
const ManageBike = () => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setshowModalDeleteUser] = useState(false);
  const [dataUpdate, setdataUpdate] = useState('');
  const [dataDelete, setdataDelete] = useState('');
  const LIMIT_USER = 6;
  const [appLoading, setAppLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [listBike, setListBike] = useState([]);
  useEffect(() => {
    fetchListuser();
    // fetchListuserWithPaginate(1);
  }, []);
  const fetchListuser = async () => {
    setAppLoading(true);
    const res = await getAllBikes();
    if (res) {
      setListBike(res);
    }
    setAppLoading(false);
  };
  const fetchListuserWithPaginate = async (page) => {
    const res = await getUserWithPaginate(page, LIMIT_USER);
    if (res) {
      setListBike(res);
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
              <TableBike
                listBike={listBike}
                handleClickBtnUpdate={handleClickBtnUpdate}
                handleClickBtnDelete={handleClickBtnDelete}
              />
            </div>
          </>
        )}
        <ModalCreatBike
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
          fetchListuserWithPaginate={fetchListuserWithPaginate}
          currentPage={currentPage}
          fetchListuser={fetchListuser}
          setcurrentPage={setcurrentPage}
        />
        <ModalUpdateBike
          show={showModalUpdateUser}
          setShow={setshowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListuserWithPaginate={fetchListuserWithPaginate}
          resetUpdateData={resetUpdateData}
          currentPage={currentPage}
          fetchListuser={fetchListuser}
          setcurrentPage={setcurrentPage}
        />
        <ModalDeleteBike
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

export default ManageBike;
