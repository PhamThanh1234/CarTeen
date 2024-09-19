import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postUpdateUser } from '../../../services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

function ModalUpdateUser(props) {
  const { show, setShow, dataUpdate } = props;

  const handleClose = () => {
    setShow(false);
    setEmail('');
    setUsername('');
    setRole('USER');
    props.resetUpdateData();
  };

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setUsername(dataUpdate.username);
      setRole(dataUpdate.role);
    }
  }, [dataUpdate]);

  const handleSubmitCreateUser = async () => {
    let res = await postUpdateUser(dataUpdate.id, username, role);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      handleClose();

      await props.fetchListuserWithPaginate(1);
    } else if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
    setShow(false);
  };

  return (
    <>
      <Modal backdrop="static" show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="g-3">
            <div className="col-md-8">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                autoComplete="email"
                value={email}
                disabled
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-8">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                autoComplete="password"
                disabled
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitCreateUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser;
