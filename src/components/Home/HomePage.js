import React from 'react';
import { FcShipped, FcSearch, FcSurvey } from 'react-icons/fc';
import './Homepage.css';
import Question from './Questions/Questions';
import Footer from '../Footer/Footer';
import videoxe from '../../assets/xe.mp4';

const HomePage = (props) => {
  const videoRef = React.createRef();

  return (
    <div className="homepage">
      <div className="homepage-container">
        <div className="homepage-container-video">
          <video
            ref={videoRef}
            loop
            muted
            controls={false}
            onLoadedData={() => videoRef.current.play()}
          >
            <source src={videoxe} type="video/mp4" />
          </video>
        </div>
        <div className="homepage-container-content">
          <div className="content-homepage">
            <h1>Bạn cần xe để vi vu quanh khu vực du lịch ?</h1>
            <p>
              <span>
                Khám phá những dòng xe đa dạng của MotorBike để thỏa sức vi vu khám phá mọi điểm
                đến! Hãy xem ngay danh sách các loại xe chất lượng, giá cả phải chăng và phù hợp với
                nhu cầu của bạn.
              </span>
            </p>
          </div>
          <a href="/">
            <button className="cssbuttons-io-button">
              Get started
              <div className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="homepage-content">
        <div className="homepage-content-title">
          <h2>Thuê xe máy tại Motorbike chỉ với 3 bước </h2>
        </div>
        <div className="homepage-content-item">
          <div className="homepage-item">
            <div className="item-icon">
              <FcSearch />
            </div>
            <div className="item-title">
              <div className="item-content-title">
                <h3>Đăng ký thuê xe máy</h3>
              </div>
              <div className="item-content-description">
                <p>
                  {' '}
                  Mô tả chi tiết nhu cầu thuê xe máy để Motorbike có thể tìm và giữ xe phù hợp nhất
                  cho bạn.
                </p>
              </div>
            </div>
          </div>
          <div className="homepage-item">
            <div className="item-icon">
              <FcSurvey />
            </div>
            <div className="item-title">
              <div className="item-content-title">
                <h3>Xác nhận thuê xe</h3>
              </div>
              <div className="item-content-description">
                <p>
                  {' '}
                  Sau khi đặt thành công, xác nhận thuê xe máy sẽ được gửi qua tin nhắn hoặc email
                </p>
              </div>
            </div>
          </div>
          <div className="homepage-item">
            <div className="item-icon">
              <FcShipped />
            </div>
            <div className="item-title">
              <div className="item-content-title">
                <h3>Nhận xe tại điểm hẹn</h3>
              </div>
              <div className="item-content-description">
                <p>Xuất trình xác nhận thuê xe tại điểm hẹn và bắt đầu trải nghiệm dịch vụ.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Question />
      <Footer />
    </div>
  );
};

export default HomePage;
