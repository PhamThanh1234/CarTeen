import Footer from '../Footer/Footer';
import './Introduce.css';
import { FcComboChart, FcConferenceCall, FcOk } from 'react-icons/fc';
const Introduce = () => {
  return (
    <>
      <div className="introduce">
        <div className="introduce-container">
          <div className="introduce-title-page">
            <h1>Giới thiệu về chúng tôi</h1>
          </div>
          <h3>Sứ mệnh</h3>
          <p>
            Nhìn thấy nhu cầu du lịch tăng cao tại nhiều địa điểm nổi tiếng như ở Hà Nội, Hải Phòng,
            Quy Nhơn và một số địa điểm du lịch khác. Khi khách du lịch đến thì gặp vấn đề về di
            chuyển đi lại tại địa điểm du lịch vì đặt xe trên app cũng như xe ôm công nghệ hoàn toàn
            không đáp ứng được nhu cầu tham gia giao thông cũng như di chuyển của khách di lịch. Vì
            vậy MotorBike sáng lập nhằm hướng tới khách hàng đó là khách du lịch từ các nơi tới với
            nhu cầu di chuyển linh hoạt cũng như chủ động về thời gian. MotorBike cho thuê nhiều
            loại xe trên thị trường ví dụ như honda, yamaha với nhiều dùng như SH, Vision, Wave để
            phục vụ nhu cầu của khách du lịch.
          </p>
        </div>
        <div className="introduce-container">
          <div className="introduce-title-page">
            <h1>Đội ngũ quản trị</h1>
          </div>
          <div className="introduce-container-item">
            <div className="introduce-administration">
              <div className="introduce-administration-title">
                <h3>Hieu Nguyen</h3>
                <p>Founder and CEO</p>
              </div>
              <div className="introduce-administration-content">
                <p>
                  Sau khi tốt nghiệp thạc sỹ Marketing tại đại học Swinburne University of
                  Technology. Hiếu Nguyễn về làm việc cho một công ty viễn thông tại Việt Nam với
                  vai trò phụ trách nghiên cứu thị trường và phát triển các sản phẩm công nghệ mới
                  tại công ty. Sau hơn 5 năm làm việc tại đây, Hiếu Nguyễn rời khỏi cty và xây dựng
                  lên MotorBike, bắt đầu con đường riêng của mình dựa với mục tiêu đưa MotorBike trở
                  thành đơn vị cung cấp dịch vụ thuê xe số 1 Việt Nam.
                </p>
              </div>
            </div>
            <div className="introduce-administration">
              <div className="introduce-administration-title">
                <h3>Ex-colleagues</h3>
                <p>Managers</p>
              </div>
              <div className="introduce-administration-content">
                <p>
                  Những người đã có sự đóng góp vào sự phát triển của MotorBike giai đoạn ban đầu.
                  Họ đã dành một phần tuổi thanh xuân làm việc ở đây. Sự đóng góp của họ là luôn
                  được những người ở lại tiếp bước ghi nhớ và cảm ơn những đóng góp của họ.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="introduce-container">
          <div className="introduce-title-page">
            <h1>Giá trị hướng đến</h1>
          </div>
          <div className="introduce-content-item">
            <div className="introduce-item">
              <div className="item-icon">
                <FcOk />
              </div>
              <div className="item-title">
                <div className="item-content-title">
                  <h3>ÂN TÂM</h3>
                </div>
                <div className="item-content-description">
                  <p>
                    {' '}
                    Với 100% xe cho thuê là xe máy mới, đồng đều về kiểu dáng chất lượng. Ngoài ra,
                    các xe đều được áp dụng quy trình bảo dưỡng để đảm bảo xe luôn trong điều kiện
                    tốt nhất trước khi giao xe cho khách.
                  </p>
                </div>
              </div>
            </div>
            <div className="introduce-item">
              <div className="item-icon">
                <FcConferenceCall />
              </div>
              <div className="item-title">
                <div className="item-content-title">
                  <h3>ĐỒNG HÀNH</h3>
                </div>
                <div className="item-content-description">
                  <p>
                    {' '}
                    MotorBike cung cấp dịch vụ hỗ trợ khách hàng 24/24h thông qua các kênh hotline
                    và Mạng xã hội, giúp giải đáp thắc mắc của khách hàng bất cứ khi nào cần.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="introduce-item">
              <div className="item-icon">
                <FcComboChart />
              </div>
              <div className="item-title">
                <div className="item-content-title">
                  <h3>MINH BẠCH</h3>
                </div>
                <div className="item-content-description">
                  <p>
                    Sự minh bạch rõ ràng trong các chính sách thuê xe, mức giá thuê xe đều được công
                    khai và thông báo cho khách hàng để đảm bảo khách hàng có thể yên tâm khi có vấn
                    đề xảy ra.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Introduce;
