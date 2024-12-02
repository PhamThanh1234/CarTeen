import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { postUpdateBike } from '../../../services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

function ModalUpdateBike(props) {
  const { show, setShow, dataUpdate } = props;

  const handleClose = () => {
    setShow(false);

    setName('');
    setLocation(''); // Reset giá trị mặc định

    setPrice('');

    props.resetUpdateData();
  };

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [price, setPrice] = useState('');

  // Gán dữ liệu từ `dataUpdate` khi modal mở
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setName(dataUpdate.motorbikeName || ''); // Lấy tên xe
      setLocation(dataUpdate.locationName || 'HN-01'); // Địa điểm

      setPrice(dataUpdate.rentalPrice || ''); // Giá thuê
    }
  }, [dataUpdate]);

  const handleSubmitUpdateBike = async () => {
    console.log(
      'check data:',
      dataUpdate.motorbikeId,

      name,
      location,

      price
    );
    const res = await postUpdateBike(
      dataUpdate.motorbikeId,

      name,
      location,

      price
    );
    if (res && res.EC === 0) {
      toast.success(res.EM);
      handleClose();
      await props.fetchListBikesWithPaginate(1); // Làm mới danh sách xe
    } else if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
    setShow(false);
  };

  return (
    <>
      <Modal backdrop="static" show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Update a bike</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="g-3">
            {/* Tên xe */}
            <div className="col-md-8">
              <label className="form-label">Tên xe</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            {/* Địa điểm */}
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

            {/* Giá thuê */}
            <div className="col-md-8">
              <label className="form-label">Giá thuê</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitUpdateBike}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateBike;
