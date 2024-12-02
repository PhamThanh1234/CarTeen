import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateNewBike } from '../../../services/apiService'; // Đảm bảo hàm này phù hợp với việc tạo xe
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function ModalCreateBike(props) {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setType('XSO');
    setLocation();
    setLicensePlate('');
    setPrice('');
    setStatus('Available');
  };
  const [motobikeID, setmotobikeId] = useState('');
  const [type, setType] = useState('XSO');
  const [name, setName] = useState('');
  const [location, setLocation] = useState();
  const [licensePlate, setLicensePlate] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Available');
  const [image, setImage] = useState('');
  const [previewImage, setpreviewImage] = useState();

  const handleSubmitCreateBike = async () => {
    if (!type || !name || !licensePlate || !price) {
      toast.error('Please fill in all required fields!');
      return;
    }

    let res = await postCreateNewBike(motobikeID, type, name, location, licensePlate, price, image);
    if (res) {
      toast.success(res);
      handleClose();
      await props.fetchListBike();
    }
  };

  const handleUploadImage = (event) => {
    if (event.target.files[0]) {
      setpreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
      console.log(event.target.files[0]);
    } else {
      setpreviewImage('');
    }
  };
  return (
    <>
      <Modal className="modal-addbike" backdrop="static" show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Bike</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="g-3">
            <div className="col-md-8">
              <label className="form-label">ID xe</label>
              <input
                type="text"
                className="form-control"
                value={motobikeID}
                onChange={(event) => setmotobikeId(event.target.value)}
              />
            </div>

            <div className="col-md-8">
              <label className="form-label">Loại xe</label>
              <select
                className="form-select"
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value="XSO">XSO</option>
                <option value="PKL">PKL</option>
                <option value="XTC">XTC</option>
              </select>
            </div>
            <div className="col-md-8">
              <label className="form-label">Địa Điểm</label>
              <select
                className="form-select"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="Hồ Hoàn Kiếm">Hồ Hoàn Kiếm</option>
                <option value="Ngã Tư Sở">Ngã Tư Sở</option>
                <option value="Tam Trinh">Tam Trinh</option>
                <option value="Bách Khoa">Bách Khoa</option>
                <option value="Cầu Giấy">Cầu Giấy</option>
                <option value="Xa La">Xa La</option>
                <option value="Thanh Xuân">Thanh Xuân</option>
                <option value="Nhổn">Nhổn</option>
                <option value="Sơn Tây">Sơn Tây</option>
                <option value="Mai Động">Mai Động</option>
              </select>
            </div>

            <div className="col-md-8">
              <label className="form-label">Tên xe</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="col-md-8">
              <label className="form-label">Biển số xe</label>
              <input
                type="text"
                className="form-control"
                value={licensePlate}
                onChange={(event) => setLicensePlate(event.target.value)}
              />
            </div>

            <div className="col-md-8">
              <label className="form-label">Giá thuê</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                Upload File Image
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewImage ? <img src={previewImage} /> : <span>Preview Imgge</span>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitCreateBike}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateBike;
