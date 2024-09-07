import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-nav">
        <div className="title-nav">
          <h5>Liên hệ</h5>
        </div>
        <div className="content-nav">
          <p>MotorBike là dịch vụ cho thuê xe máy tự lái chuyên nghiệp tại Việt Nam.</p>
          <div>Tổng đài (24/24H): 0338 023 344</div>
          <span> English speaking: 0966 456 969</span>
        </div>
      </div>
      <div className="footer-nav">
        <div className="title-nav">
          <h5>Về MotorBike</h5>
        </div>
        <div className="content-nav">
          <ul className="content-ul">
            <li className="content-li">Tuyển dụng</li>
            <li className="content-li">Điều khoản và điều lệ</li>
            <li className="content-li">Chính sách bảo mật</li>
            <li className="content-li">Liên hệ, hợp tác</li>
          </ul>
        </div>
      </div>
      <div className="footer-nav">
        <div className="title-nav">
          <h5>Địa điểm</h5>
        </div>
        <div className="content-nav">
          <p>Có nhiều địa điểm trên toàn quốc</p>
          <p>Địa chỉ trụ sở: 123 Nguyễn Văn Cừ, Phường 12, Quận 7, TP. HCM</p>
          <a
            href="https://www.google.com/maps/place/414+%C4%90.+Nguy%E1%BB%85n+V%C4%83n+C%E1%BB%AB,+Ng%E1%BB%8Dc+L%C3%A2m,+Long+Bi%C3%AAn,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0464683,105.8732304,17z/data=!3m1!4b1!4m6!3m5!1s0x3135a97e68e7a42b:0x6592c1727c70deca!8m2!3d21.0464634!4d105.8781013!16s%2Fg%2F11d_3nnppd?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <p>Cơ sở 1: 414 Đ. Nguyễn Văn Cừ, Ngọc Lâm, Long Biên, Hà Nội, Việt Nam</p>
          </a>

          <a
            href="https://www.google.com/maps/place/274+P.+L%C3%AA+L%E1%BB%A3i,+L%C3%AA+L%E1%BB%A3i,+Ng%C3%B4+Quy%E1%BB%81n,+H%E1%BA%A3i+Ph%C3%B2ng,+Vi%E1%BB%87t+Nam/@20.8535932,106.684703,17z/data=!3m1!4b1!4m6!3m5!1s0x314a7a8d9d41349b:0x26c530ee5051a!8m2!3d20.8535882!4d106.6872779!16s%2Fg%2F11c22lr_43?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <p>Cơ sở 2: 274 P. Lê Lợi, Lê Lợi, Ngô Quyền, Hải Phòng, Việt Nam</p>
          </a>

          <a
            href="https://www.google.com/maps/place/B%C3%81NH+X%C3%88O+T%C3%94M+NH%E1%BA%A2Y+748/@13.7840185,109.2153833,20z/data=!4m6!3m5!1s0x316f6d00218f40c5:0x2e0e5c90aaae890a!8m2!3d13.7841896!4d109.2153788!16s%2Fg%2F11w7ndfnw5?hl=vi-VN&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <p>Cơ sở 3: 748 Trần Hưng Đạo, Đống Đa, Thành phố Qui Nhơn, Bình Định, Việt Nam</p>
          </a>

          <p>Email: support@motorbike.com</p>
          <p>Hotline: 0966 456 969</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
