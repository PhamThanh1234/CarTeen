import './Privacy.css';
import anhprivacy from '../../assets/privacy2.jpg';
import Footer from '../Footer/Footer';
const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-title">
        <h1>Chính sách khách hàng thân thiết</h1>
      </div>
      <div className="privacy-content">
        <p>
          MOTOGO là dịch vụ cho thuê xe máy hướng tới sự chuyên nghiệp. Để đạt được mục tiêu đó
          không thể thiếu được sự ủng hộ khách hàng. Trong chặn đường xây dựng và phát triển của
          MOTOGO, đã có nhiều khách hàng tin tưởng sử dụng dịch vụ thuê xe máy của chúng tôi nhiều
          lần tại nhiều tỉnh thành khác nhau.
        </p>
        <img src={anhprivacy} height={'370px'} width={'600px'}></img>
        <p>
          Với chính sách khách hàng thân thiết của MOTOGO, chúng tôi hi vọng sẽ được đồng hành cùng
          khách hàng lâu hơn nữa trong quãng thời gian hoạt động của MOTOGO.
        </p>
        <p>
          Với các khách hàng có trải nghiệm tốt về dịch vụ thuê xe máy, để lại các review đánh giá
          5* trên các kênh Social thuộc MOTOGO quản lý như Facebook, Google maps. Lần thuê xe kế
          tiếp chúng tôi sẽ miễn phí 1 lần giao hoặc nhận xe cho khách thuê 1 xe. Nếu thuê nhiều xe,
          MOTOGO sẽ miễn phí nâng cấp từ mũ 1/2 đầu lên 3/4 đầu cho toàn bộ đoàn xe thuê.
        </p>
        <p>
          Với các khách hàng thân thiết có số lần thuê xe lớn hơn 3 lần, lần thuê xe tiếp theo sẽ
          được giảm 5% tổng giá trị hợp đồng. Với khách hàng thân thiết thuê lớn hơn 5 lần, lần thuê
          tiếp theo được giảm giá 10%
        </p>
        <p>Khách hàng cũ có ngày sinh nhật trong tháng thuê xe sẽ được đổ đầy bình xăng.</p>
        <p>
          Các khách hàng cũ có hợp đồng thuê xe mới lớn hơn 1 triệu đồng, được miễn phí dịch vụ giao
          hoặc nhận xe. Ngoài ra, nếu nhận xe tại cửa hàng sẽ được đổ đầy bình xăng.
        </p>
      </div>
      <div className="privacy-title">
        <h1>Chính sách thuê xe</h1>
      </div>
      <div className="privacy-content"></div>
      <div className="privacy-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
