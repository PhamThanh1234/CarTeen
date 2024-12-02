import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postCreateNewBike, postCreateNewUser } from '../../../services/apiService'; // Đảm bảo hàm này phù hợp với việc tạo xe
import { toast } from 'react-toastify';
import { FcPlus } from 'react-icons/fc';
import 'react-toastify/dist/ReactToastify.css';

function ModalCreateBike(props) {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setType('XSO'); // Reset về giá trị mặc định
    setName('');
    setLocation('HN-01'); // Reset về giá trị mặc định
    setLicensePlate('');
    setPrice('');
    setStatus('Available');
  };
  const [motobikeID, setmotobikeId] = useState('');
  const [type, setType] = useState('XSO'); // Giá trị mặc định
  const [name, setName] = useState('');
  const [location, setLocation] = useState('HN-01'); // Giá trị mặc định
  const [licensePlate, setLicensePlate] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Available');
  const [image, setImage] = useState('Available');
  const [previewImage, setpreviewImage] = useState();

  const handleSubmitCreateBike = async () => {
    // Kiểm tra các trường bắt buộc
    if (!type || !name || !licensePlate || !price) {
      toast.error('Please fill in all required fields!');
      return;
    }

    // Gọi API để tạo xe (đảm bảo hàm API phù hợp với dữ liệu xe)
    let res = await postCreateNewBike(
      motobikeID,
      type,
      name,
      location,
      licensePlate,
      price,
      previewImage
    );
    console.log(motobikeID, type, name, location, licensePlate, price, previewImage);
  };
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setpreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
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
            {/* Trường "Loại xe" - Combobox */}
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

            {/* Trường "Tên xe" */}
            <div className="col-md-8">
              <label className="form-label">Tên xe</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            {/* Trường "Địa điểm" - Combobox với các lựa chọn đã cung cấp */}
            <div className="col-md-8">
              <label className="form-label">Địa điểm</label>
              <select
                className="form-select"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="HN-01">Hồ Hoàn Kiếm</option>
                <option value="HN-02">Ngã Tư Sở</option>
                <option value="HN-03">Tam Trinh</option>
                <option value="HN-04">Bách Khoa</option>
                <option value="HN-05">Cầu Giấy</option>
                <option value="HN-06">Xa La</option>
                <option value="HN-07">Thanh Xuân</option>
                <option value="HN-08">Nhổn</option>
                <option value="HN-09">Sơn Tây</option>
                <option value="HN-10">Mai Động</option>
              </select>
            </div>

            {/* Trường "Biển số xe" */}
            <div className="col-md-8">
              <label className="form-label">Biển số xe</label>
              <input
                type="text"
                className="form-control"
                value={licensePlate}
                onChange={(event) => setLicensePlate(event.target.value)}
              />
            </div>

            {/* Trường "Giá thuê" */}
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
