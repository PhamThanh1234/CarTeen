import { useLocation } from 'react-router-dom';
import BillCard from './BillCard';
import { useState } from 'react';
const Detail = (props) => {
  const location = useLocation(); // Access location object
  const { bikeName, price, img } = location.state || {};
  const [formData, setFormData] = useState({
    soluong: '',
    address: '',
    phone: '',
    pickupDate: '',
    pickupTime: '08:00',
    returnDate: '',
    returnTime: '18:00',
    returnAtPickup: false,
    bikeName: bikeName,
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const [status, setStatus] = useState(false);
  const validateForm = () => {
    const newErrors = {};

    if (!formData.soluong || formData.soluong <= 0) {
      newErrors.soluong = 'Số lượng xe phải lớn hơn 0';
    }
    if (!formData.address) {
      newErrors.address = 'Vui lòng nhập địa chỉ nhận xe';
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Số điện thoại phải có 10 chữ số';
    }
    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Vui lòng chọn ngày nhận xe';
    }
    if (!formData.returnDate) {
      newErrors.returnDate = 'Vui lòng chọn ngày trả xe';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setStatus(true);
      console.log('Valid Data:', formData);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-2/3 pr-4">
          <h1 className="text-xl font-bold mb-4">{bikeName}</h1>
          <div className="border p-4 mb-4">
            <div className="flex">
              <img src={img} alt="Red scooter" className="w-1/3" />
              <div className="w-2/3 pl-4">
                <h2 className="font-bold">Dòng xe bất kỳ</h2>
                <p>Đời xe: từ 2016</p>
                <p>Tiện ích: Mũ bảo hiểm, Xăng (1l), Giao xe tận nơi</p>
                <div className="flex items-center mt-2">
                  <i className="fas fa-map-marker-alt text-blue-500"></i>
                  <a href="#" className="text-blue-500 ml-2">
                    Hướng dẫn nhận xe
                  </a>
                </div>
                <div className="flex items-center mt-2">
                  <i className="fas fa-map-marker-alt text-blue-500"></i>
                  <a href="#" className="text-blue-500 ml-2">
                    Hướng dẫn trả xe
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border p-4 mb-4">
            <h2 className="font-bold mb-2">Thông tin chi tiết</h2>
            <a href="#" className="text-blue-500 block mb-2">
              Thời gian thuê tối thiểu
            </a>
            <a href="#" className="text-blue-500 block mb-2">
              Tính 1 ngày thuê xe bằng 24 tiếng
            </a>
            <a href="#" className="text-blue-500 block">
              Hủy thuê xe máy
            </a>
          </div>
          <div className="border p-4">
            <h2 className="font-bold mb-2">Tại sao nên thuê xe máy tại CarTeen</h2>
            <p className="flex items-center mb-2">
              <i className="fas fa-check text-green-500 mr-2"></i>Nhiều lựa chọn
            </p>
            <p className="flex items-center mb-2">
              <i className="fas fa-check text-green-500 mr-2"></i>Thông tin minh bạch
            </p>
            <p className="flex items-center mb-2">
              <i className="fas fa-check text-green-500 mr-2"></i>Hỗ trợ tận tình
            </p>
            <p className="flex items-center">
              <i className="fas fa-check text-green-500 mr-2"></i>Thủ tục đơn giản
            </p>
          </div>
        </div>

        <div className="w-1/3 pl-4">
          <div className="border p-4">
            <h2 className="text-red-500 text-xl font-bold mb-4">{price}VND/giờ</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Số lượng xe *</label>
                <input
                  type="number"
                  name="soluong"
                  value={formData.soluong}
                  className="w-full border p-2"
                  onChange={handleChange}
                />
                {errors.soluong && <p className="text-red-500">{errors.soluong}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-2">Địa chỉ nhận xe *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  className="w-full border p-2"
                  onChange={handleChange}
                />
                {errors.address && <p className="text-red-500">{errors.address}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-2">Số điện thoại *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  className="w-full border p-2"
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="returnAtPickup"
                    checked={formData.returnAtPickup}
                    className="mr-2"
                    onChange={handleChange}
                  />
                  Trả tại điểm nhận xe
                </label>
              </div>

              <div className="mb-4">
                <label className="block mb-2">Ngày nhận xe *</label>
                <div className="flex">
                  <input
                    type="date"
                    name="pickupDate"
                    value={formData.pickupDate}
                    className="w-2/3 border p-2 mr-2"
                    onChange={handleChange}
                  />
                  <input
                    type="time"
                    name="pickupTime"
                    value={formData.pickupTime}
                    className="w-1/3 border p-2"
                    onChange={handleChange}
                  />
                </div>
                {errors.pickupDate && <p className="text-red-500">{errors.pickupDate}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-2">Ngày trả xe *</label>
                <div className="flex">
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    className="w-2/3 border p-2 mr-2"
                    onChange={handleChange}
                  />
                  <input
                    type="time"
                    name="returnTime"
                    value={formData.returnTime}
                    className="w-1/3 border p-2"
                    onChange={handleChange}
                  />
                </div>
                {errors.returnDate && <p className="text-red-500">{errors.returnDate}</p>}
              </div>
              <div onClick={handleSubmit}>
                <BillCard data={formData} status={status} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
