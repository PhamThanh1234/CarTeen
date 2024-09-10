import './Privacy.css';
import anhprivacy from '../../assets/privacy2.jpg';
import Footer from '../Footer/Footer';
const Privacy = () => {
  const handleClickPrivacy = (e) => {
    console.log(e);
  };
  return (
    <div>
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
            Với chính sách khách hàng thân thiết của MOTOGO, chúng tôi hi vọng sẽ được đồng hành
            cùng khách hàng lâu hơn nữa trong quãng thời gian hoạt động của MOTOGO.
          </p>
          <p>
            Với các khách hàng có trải nghiệm tốt về dịch vụ thuê xe máy, để lại các review đánh giá
            5* trên các kênh Social thuộc MOTOGO quản lý như Facebook, Google maps. Lần thuê xe kế
            tiếp chúng tôi sẽ miễn phí 1 lần giao hoặc nhận xe cho khách thuê 1 xe. Nếu thuê nhiều
            xe, MOTOGO sẽ miễn phí nâng cấp từ mũ 1/2 đầu lên 3/4 đầu cho toàn bộ đoàn xe thuê.
          </p>
          <p>
            Với các khách hàng thân thiết có số lần thuê xe lớn hơn 3 lần, lần thuê xe tiếp theo sẽ
            được giảm 5% tổng giá trị hợp đồng. Với khách hàng thân thiết thuê lớn hơn 5 lần, lần
            thuê tiếp theo được giảm giá 10%
          </p>
          <p>Khách hàng cũ có ngày sinh nhật trong tháng thuê xe sẽ được đổ đầy bình xăng.</p>
          <p>
            Các khách hàng cũ có hợp đồng thuê xe mới lớn hơn 1 triệu đồng, được miễn phí dịch vụ
            giao hoặc nhận xe. Ngoài ra, nếu nhận xe tại cửa hàng sẽ được đổ đầy bình xăng.
          </p>
        </div>
        <div className="privacy-title">
          <h1>Chính sách thuê xe</h1>
        </div>
        <div className="privacy-content">
          <div className="content-left">
            <ul className="content-ul">
              <li className="content-li-privacy">
                <a className="nav-link-privacy" onClick={handleClickPrivacy}>
                  Thời gian thuê xe
                </a>
              </li>
              <li className="content-li-privacy">
                <a className="nav-link-privacy" onClick={handleClickPrivacy}>
                  Thủ tục thuê xe
                </a>
              </li>
              <li className="content-li-privacy">
                <a className="nav-link-privacy" onClick={handleClickPrivacy}>
                  Giá thuê xe
                </a>
              </li>
              <li className="content-li-privacy">
                <a className="nav-link-privacy" onClick={handleClickPrivacy}>
                  Trách nhiệm bên thuê
                </a>
              </li>
              <li className="content-li-privacy">
                {' '}
                <a className="nav-link-privacy">Trách nhiệm bên cho thuê</a>
              </li>
            </ul>
          </div>
          <div className="content-right">
            <div id="content1-right">
              <div className="content1-right-title">
                <h3>Thời gian thuê xe</h3>
                <spam>Giá thuê xe sẽ được tính kết hợp theo ngày và theo giờ</spam>
                <p>
                  <b>01 ngày thuê</b> sẽ là 24 tiếng, tính từ giờ, thời điểm bạn nhận xe ngày hôm
                  nay đến đúng giờ ngày hôm sau.
                </p>
                <p>
                  <b>Giờ thuê xe</b> chỉ được áp dụng khi bạn thuê xe lớn hơn 1 ngày. Giá theo giờ
                  phát sinh sẽ tùy thuộc vào loại xe bạn thuê:
                </p>
                <table className="table">
                  <tbody className="table-privacy">
                    <tr>
                      <th style={{ color: 'black', borderWidth: 1 }}>Xe số</th>
                      <td> 15k/tiếng phát sinh</td>
                    </tr>

                    <tr>
                      <th style={{ color: 'black', borderWidth: 1 }}>Xe tay ga</th>
                      <td>20k/tiếng phát sinh</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  <strong>
                    <i>Lưu ý:</i>
                  </strong>{' '}
                  Nếu số giờ phát sinh của bạn lớn hơn 8 ttieeng, MotorBike sẽ tính tròn là 1 ngày
                  thuê xe.
                </p>
                <p>Ví dụ: Bạn thuê một xe số Sirius,</p>
                <p>
                  <strong>Nhận xe: </strong>9h sáng, 21/03/2022
                </p>
                <p>
                  <strong>Trả xe lúc: </strong> 3h chiều, 22/03/2022
                </p>
                <p>
                  Hệ thống của chúng tôi sẽ tính toán như sau: Tổng thời gian bạn thuê xe sẽ là 1
                  ngày và 6 tiếng, bạn sẽ thay toán cho tổng thời gian thuê xe đó bao gồm giá thuê
                  xe 1 ngày là 130k và giá thuê xe 06 tiếng phát sinh còn lại còn lại = 90k. Tổng số
                  tiền thuê xe của bạn sẽ là 220k.
                </p>
                <ul>
                  <li>
                    <strong>
                      Ngày đầu tiên thuê xe, bạn thuê một vài tiếng thì vẫn phải trả tiền thuê xe
                      tròn 1 ngày.
                    </strong>
                  </li>
                </ul>
                <p>
                  Ví trụ: <strong>Thời gian lấy xe của bạn là </strong> 9h sáng, 21/03/2022, Thời
                  gian trả xe của bạn là 3h chiều cùng ngày thì HỆ THỐNG chúng tôi sẽ tính thời gian
                  thuê xe là 1 ngày.
                </p>
                <ul>
                  <li>
                    <strong>Đi quá 30 phút mới làm tròn thành 1 tiếng phát sinh.</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div id="content2-right"></div>
            <div id="content3-right"></div>
            <div id="content4-right"></div>
            <div id="content5-right"></div>
          </div>
        </div>
        <div className="privacy-footer"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
