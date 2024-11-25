import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createInvoice } from '../../services/apiService';
import { Bounce, toast } from 'react-toastify';

const PaymentInvoice = () => {
  const [invoiceDate, setInvoiceDate] = useState('');
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(''); // Thông báo kết quả
  // Sử dụng useEffect để lấy thời gian hiện tại khi component được render
  useEffect(() => {
    const formatDateToCustom = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Thêm số 0 nếu cần
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const now = new Date('2024-10-25T14:30:00');
    const formattedDate = formatDateToCustom(now);
    setInvoiceDate(formattedDate);
  }, []);
  const [paymentMethod, setPaymentMethod] = useState('');
  const payment = useLocation(); // Access location object
  const { carInfo, name, location, address, phone, Total, time } = payment.state || {};
  const handleSubmit = async () => {
    const apiData = {
      invoiceCreateRequest: {
        motorbikeRequest: {
          motorbikeName: carInfo[0].motorbikeName || 'Không xác định',
          locationName: location || 'Không xác định',
          count: carInfo?.length || 1,
        },
      },
      detailCreateRequest: {
        receiptDate: invoiceDate, // Lấy thời gian hiện tại
        rentalHours: time || 0, // Lấy thời gian thuê từ carInfo
      },
    };
    const token = localStorage.getItem('token');
    const response = await createInvoice(apiData, token);
    if (response) {
      toast.success('🦄 Wow so easy!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      navigate('/');
    }
  };
  const handleCancel = () => {
    navigate(-1); // Quay lại trang trước
  };
  return (
    <div className="p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="text-right">
            <h1 className="text-xl font-bold">HÓA ĐƠN BÁN HÀNG</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="font-bold">Ký hiệu:</p>
            <p>1C24TAA</p>
          </div>
          <div>
            <p className="font-bold">Mã số thuế:</p>
            <p>88888888-829</p>
          </div>
          <div>
            <p className="font-bold">Số:</p>
            <p>Chưa cấp số</p>
          </div>
          <div>
            <p className="font-bold">Ngày tạo hóa đơn:</p>
            <p className="text-black-500">Tại {invoiceDate}</p>
          </div>
          <div>
            <p className="font-bold">Địa chỉ giao hàng:</p>
            <p>{address}</p>
          </div>
          <div>
            <p className="font-bold">Áp dụng giảm thuế GTGT:</p>
            <p>theo nghị quyết 142/2024/QH15</p>
          </div>
          <div>
            <p className="font-bold">MST người mua:</p>
            <p>6868686868-829</p>
          </div>
          <div>
            <p className="font-bold">Đơn vị phân phối:</p>
            <p>Công ty TNHH CarTeen</p>
          </div>
          <div>
            <p className="font-bold">Địa chỉ:</p>
            <p>{location}</p>
          </div>
          <div>
            <p className="font-bold">Người mua hàng:</p>
            <p>{name}</p>
          </div>
          <div>
            <p className="font-bold">Email:</p>
            <p>vananh@gmail.com</p>
          </div>
          <div>
            <p className="font-bold">Số điện thoại:</p>
            <p>{phone}</p>
          </div>
          <div>
            <p className="font-bold">Hình thức TT:</p>
            <div className="relative">
              <select
                className="border border-gray-300 rounded px-2 py-1 w-full"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option>Tiền mặt</option>
                <option>Chuyển khoản</option>
              </select>
            </div>
          </div>
          <div>
            <p className="font-bold">Số tài khoản ngân hàng:</p>
            <p>12345643</p>
          </div>
          <div>
            <p className="font-bold">Tên ngân hàng:</p>
            <p>Ngân hàng ABC</p>
          </div>
        </div>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 py-1">STT</th>
              <th className="border border-gray-300 px-2 py-1">Tên xe</th>
              <th className="border border-gray-300 px-2 py-1">Biển số xe</th>
              <th className="border border-gray-300 px-2 py-1">Giá thuê</th>
              <th className="border border-gray-300 px-2 py-1">Thời gian thuê</th>
            </tr>
          </thead>
          <tbody>
            {carInfo.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2 py-1">{index + 1}</td>
                <td className="border border-gray-300 px-2 py-1">{item.motorbikeName}</td>
                <td className="border border-gray-300 px-2 py-1">{item.licensePlate}</td>
                <td className="border border-gray-300 px-2 py-1">{item.rentalPrice} VND</td>
                <td className="border border-gray-300 px-2 py-1">{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {paymentMethod === 'Chuyển khoản' && (
          <div className="mt-4">
            <p className="font-bold">Mã QR để thanh toán:</p>
            <img
              src="https://placehold.co/150x150"
              alt="QR code for bank transfer"
              className="mt-2"
            />
            <p className="mt-2">Số tài khoản: 12345643</p>
            <p>Tên ngân hàng: Ngân hàng ABC</p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
            <a>Xác nhận</a>
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleCancel} // Gắn sự kiện hủy
          >
            Hủy
          </button>
          <p className="text-black-800">Tổng tiền hàng: {Total} VND</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInvoice;
