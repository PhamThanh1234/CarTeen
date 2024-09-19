import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteUser } from '../../../services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ModalDeleteUser(props) {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => setShow(false);
  const handleSubmitDelete = async () => {
    // Call API to create user

    let res = await deleteUser(dataDelete.id);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleClose();
      // await props.fetchListUser();
      props.setcurrentPage(1);
      await props.fetchListuserWithPaginate(1);
    }
    if (res.data && res.data.EC !== 0) {
      toast.error(res.data.EM);
    }
    console.log(res.data);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete use. email=<b>{dataDelete.email}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmitDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;
