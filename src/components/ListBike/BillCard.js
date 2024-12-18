import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getListBillCar } from '../../services/apiService';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
function BillCard(props) {
  const { show, setShow, data, total } = props;
  const [billLoading, setBillLoading] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [carInfo, setCarInfo] = useState([]);

  const navigate = useNavigate();
  const calculateRentalHours = () => {
    const pickup = new Date(`${data.pickupDate}T${data.pickupTime}`);
    const returnDate = new Date(`${data.returnDate}T${data.returnTime}`);
    const diffInMs = returnDate - pickup;
    return Math.floor(diffInMs / (1000 * 60 * 60));
  };

  const calculateTotalPayment = (carInfo, rentalHours) => {
    if (!Array.isArray(carInfo) || carInfo.length === 0) {
      return 0; // Trả về 0 nếu carInfo không phải là mảng hoặc mảng trống
    }
    return carInfo.reduce((sum, car) => sum + car.rentalPrice * rentalHours, 0);
  };

  const calculateTotalCost = () => {
    const rentalHours = calculateRentalHours();
    const total = calculateTotalPayment(carInfo, rentalHours);
    setTotalCost(total);
  };

  const handleShow = async () => {
    if (show) {
      setBillLoading(true);
      calculateTotalCost();
      const res = await getListBillCar(data.bikeName, data.location, data.soluong);
      console.log('checkdata', data);
      console.log('Kết quả API:', res);
      if (res) {
        setCarInfo(res);
        calculateTotalCost();
      }
      setBillLoading(false);
    }
  };

  const handleClose = () => {
    console.log('Closing modal...'); // Xác nhận hàm được gọi
    setShow(false);
  };

  const handleCreateBillCard = async () => {
    navigate(`/paymentinvoice`, {
      state: {
        carInfo,
        name: data.name,
        location: data.location,
        address: data.address,
        phone: data.phone,
        Total: total * calculateRentalHours(),
        time: calculateRentalHours(),
      },
    });
  };

  useEffect(() => {
    calculateTotalCost();
    if (show) {
      handleShow(); // Chỉ gọi khi modal đang mở
      calculateTotalCost();
    }
  }, [show]);

  return (
    <Modal backdrop="static" show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Hóa đơn</Modal.Title>
      </Modal.Header>
      {billLoading === true ? (
        <Modal.Body>
          <div
            style={{
              position: 'fixed',

              left: '50%',
            }}
          >
            <Spin />
          </div>
        </Modal.Body>
      ) : (
        <Modal.Body>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Thông Tin Khách Hàng</h2>
            <div className="p-4 border rounded">
              <p>
                <strong>Tên:</strong> {data.name}
              </p>
              <p>
                <strong>Số lượng xe:</strong> {data.soluong}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {data.phone}
              </p>
              <p>
                <strong>Địa chỉ giao hàng:</strong> {data.address}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Danh Sách Xe</h2>
            <div className="p-4 border rounded">
              <ul className="ul-listbillcar">
                {Array.isArray(carInfo) && carInfo.length > 0 ? (
                  carInfo.map((car, index) => (
                    <li key={index} className="mb">
                      <p>
                        <strong>Tên xe:</strong> {car.motorbikeName}
                      </p>
                      <p>
                        <strong>Loại xe:</strong> {car.typeName}
                      </p>
                      <p>
                        <strong>Biển số:</strong> {car.licensePlate}
                      </p>
                      <p>
                        <strong>Giá thuê/giờ:</strong> {car.rentalPrice} VNĐ
                      </p>
                      {index < carInfo.length - 1 && <hr className="my-4 border-black" />}
                    </li>
                  ))
                ) : (
                  <p>Không có thông tin xe nào.</p>
                )}
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Chi Tiết Thời Gian Thuê</h2>
            <div className="p-4 border rounded">
              <p>
                <strong>Thời gian bắt đầu:</strong> {data.pickupDate}, {data.pickupTime}
              </p>
              <p>
                <strong>Thời gian kết thúc:</strong> {data.returnDate}, {data.returnTime}
              </p>
              <p>
                <strong>Tổng số giờ thuê:</strong> {calculateRentalHours()} giờ
              </p>
            </div>
          </div>

          <div className="text-right mb-6">
            <p className="text-lg font-semibold">
              Tổng Chi Phí: {total * calculateRentalHours()} VNĐ
            </p>
          </div>
        </Modal.Body>
      )}
      <Modal.Footer>
        <Button variant="primary" onClick={handleCreateBillCard}>
          In Hóa Đơn
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BillCard;
