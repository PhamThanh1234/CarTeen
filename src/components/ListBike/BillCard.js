import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function BillCard({ data, status }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (status === true) {
      setShow(true);
    }
  };

  // Create a list of bikes based on the quantity (soluong)
  const renderBikeList = () => {
    const bikes = [];
    for (let i = 1; i <= data.soluong; i++) {
      bikes.push(
        <li key={i} className="mb-2">
          <strong>Xe {i}:</strong> {data.bikeName} - {data.price} VND
        </li>
      );
    }
    return bikes;
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Đăng ký thuê xe
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Hóa đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4">
            <h1 className="text-lg font-semibold">Thông tin khách hàng</h1>
            <p>
              <strong>Số lượng xe:</strong> {data.soluong}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {data.phone}
            </p>
            <p>
              <strong>Địa chỉ giao hàng:</strong> {data.address}
            </p>

            <div className="mt-4">
              <h2 className="text-sm font-semibold">Thông tin xe thuê</h2>
              <p>
                <strong>Ngày nhận xe:</strong> {data.pickupDate} - {data.pickupTime}
              </p>
              <p>
                <strong>Ngày trả xe:</strong> {data.returnDate} - {data.returnTime}
              </p>
              <p>
                <strong>Trả tại điểm nhận xe:</strong> {data.returnAtPickup ? 'Có' : 'Không'}
              </p>

              {data.soluong > 1 && (
                <div className="mt-4">
                  <h2 className="text-sm font-semibold">Danh sách xe</h2>
                  <ul className="list-disc pl-5">{renderBikeList()}</ul>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Lưu thay đổi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BillCard;
