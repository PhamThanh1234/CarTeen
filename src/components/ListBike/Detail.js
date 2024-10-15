import { useLocation } from 'react-router-dom';
const Detail = (props) => {
  const location = useLocation(); // Access location object
  const { bikeName, price, img } = location.state || {};
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
            <h2 className="text-red-500 text-xl font-bold mb-4">{price}</h2>
            <p className="text-sm mb-4">
              *Giá thuê chưa bao gồm: Xăng phục vụ suốt chuyến đi, Bảo hiểm hành khách, Thuế VAT,
              Phụ thu dịp Lễ Tết.
            </p>
            <form>
              <div className="mb-4">
                <label className="block mb-2">Số lượng xe *</label>
                <input type="number" className="w-full border p-2" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Địa chỉ nhận xe *</label>
                <input type="text" className="w-full border p-2" />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Trả tại điểm nhận xe
                </label>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Ngày nhận xe</label>
                <div className="flex">
                  <input type="date" className="w-2/3 border p-2 mr-2" />
                  <input type="time" className="w-1/3 border p-2" defaultValue="08:00" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Ngày trả xe</label>
                <div className="flex">
                  <input type="date" className="w-2/3 border p-2 mr-2" />
                  <input type="time" className="w-1/3 border p-2" defaultValue="18:00" />
                </div>
              </div>
              <button type="submit" className="w-full bg-yellow-500 text-white p-2 font-bold">
                Đăng ký thuê xe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
