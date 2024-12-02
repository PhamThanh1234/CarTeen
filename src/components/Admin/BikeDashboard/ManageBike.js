import ModalCreatBike from './ModalCreatBike';
import ModalUpdateBike from './ModalUpdateBike';
import { useState, useEffect } from 'react';
import './ManageBike.css';
import { getAllBikes } from '../../../services/apiService';
import ModalDeleteBike from './ModalDeleteBike';
import TableBike from './TableBike';
import { Spin } from 'antd';

const ManageBike = () => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setshowModalDeleteUser] = useState(false);
  const [dataUpdate, setdataUpdate] = useState('');
  const [dataDelete, setdataDelete] = useState('');

  const [appLoading, setAppLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);

  const [listBike, setListBike] = useState([]);
  useEffect(() => {
    fetchListBike();
  }, []);
  const fetchListBike = async () => {
    setAppLoading(true);
    const res = await getAllBikes();
    if (res) {
      setListBike(res);
    }
    setAppLoading(false);
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
            Add new Bike
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
          currentPage={currentPage}
          fetchListBike={fetchListBike}
          setcurrentPage={setcurrentPage}
        />
        <ModalUpdateBike
          show={showModalUpdateUser}
          setShow={setshowModalUpdateUser}
          dataUpdate={dataUpdate}
          resetUpdateData={resetUpdateData}
          fetchListBike={fetchListBike}
        />
        <ModalDeleteBike
          show={showModalDeleteUser}
          setShow={setshowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListBike={fetchListBike}
          currentPage={currentPage}
          setcurrentPage={setcurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageBike;
