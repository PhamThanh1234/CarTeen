import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteBike } from '../../../services/apiService';

import 'react-toastify/dist/ReactToastify.css';
function ModalDeleteBike(props) {
  const { show, setShow, dataDelete } = props;
  console.log(dataDelete);
  const handleClose = () => setShow(false);
  const handleSubmitDelete = async () => {
    let res = await deleteBike(dataDelete.motorbikeId);
    if (res) {
      handleClose();
      await props.fetchListBike();
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the Bike ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete bike</Modal.Body>
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

export default ModalDeleteBike;
