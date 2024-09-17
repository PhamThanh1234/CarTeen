import './Privacy.css';
import anhprivacy from '../../assets/privacy2.jpg';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import classnames from 'classnames';
const Privacy = () => {
  const [status, setStatus] = useState(false);
  const handleClickPrivacy = (e) => {
    setStatus(!status);
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
                <a className="nav-link-privacy" onClick={handleClickPrivacy} href="#content1-right">
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
                <a className="nav-link-privacy" onClick={handleClickPrivacy} href="#content4-right">
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
            <div id="content1-right" className={classnames({ active: status === true })}>
              <div className="content1-right-title">
                <h3>Thời gian thuê xe</h3>
                <span>Giá thuê xe sẽ được tính kết hợp theo ngày và theo giờ</span>
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

            <div id="content2-right">
              <div className="content2-right-title">
                <h2>Thủ tục thuê xe</h2>
                <p>Các bước làm thủ tục thuê xe như sau:</p>
                <p>
                  <strong>1</strong>- Khách thuê xe phải là người trong độ tuổi được phép lái xe và
                  có Giấy phép lái xe được cấp bởi cơ quan nhà nước có thẩm quyền.
                </p>
                <p>
                  <strong>2</strong>- Phải để lại các giấy tờ sau trong các giấy tờ sau:
                </p>
                <p>
                  Đối với khách du lịch đi bằng máy bay vui lòng để lại{' '}
                  <strong>CMND, thẻ Căn cước Công dân</strong> hoặc <strong>Hộ chiếu</strong> kèm
                  với <strong>thông tin chuyến bay đến và rời.</strong>
                </p>
                <p>
                  Với khách là người địa phương hoặc từ nơi khác đến không có vé máy bay, thủ tục
                  yêu cầu là để lại <strong>CMND, thẻ Căn cước Công dân</strong> hoặc
                  <strong>Hộ chiếu</strong> kèm <strong>Sổ hộ khẩu</strong> (nếu không có sổ hộ khẩu
                  sẽ thay thế bằng <strong>tiền đặt cọc 3 triệu</strong> đồng đối với xe số và
                  <strong> tiền đặt cọc 5 triệu</strong> đồng đối với xe tay ga - số tiền này chúng
                  tôi sẽ hoàn trả lại sau khi khách hàng hoàn tất trả xe)
                </p>
                <p>
                  <strong>3</strong>– Đồng ý các điều khoản và ký vào hợp đồng thuê xe giữa 2 bên.
                </p>
                <p>
                  <strong>4</strong>– Nhận xe.
                </p>
                <p>
                  <strong>Lưu ý</strong>: Thuê xe theo đoàn thì chỉ cần 1 người đứng ra làm thủ tục
                  thuê xe.
                </p>
              </div>
            </div>
            <div id="content3-right">
              <h2>Giá thuê xe</h2>
              <p>
                Giá cho thuê xe máy tại các tỉnh thành phố sẽ khác nhau do mỗi nơi có những điều
                kiện địa hình khác nhau, ảnh hưởng đến chất lượng xe khác nhau. Mỗi thị trường sẽ có
                bảng giá, đơn giá theo ngày khác nhau, tuy nhiên cách tính về khung thời gian, chính
                sách áp dụng chung không thay đổi.
              </p>
              <p>
                Giá cho thuê xe sẽ phụ thộc vào loại xe bạn thuê và được công khai trên website.
                Chúng tôi cam kết sẽ không tăng giá thuê xe khi khách hàng đang sử dụng dịch vụ của
                chúng tôi. Để xem chi tiết mức giá từng loại xe xin vui lòng click vào bảng giá thuê
                xe.
              </p>
              <p>
                Giá trị hợp đồng thuê xe sẽ được tính dựa trên thời gian thuê xe của khách và giá
                thuê xe tính theo đơn vị ngày, giờ đối với từng loại xe.
              </p>
            </div>
            <div id="content4-right">
              <h2>Trách nhiệm bên thuê</h2>
              <p>Người thuê xe sẽ phải tự đổ nhiên liệu cho xe để di chuyển.</p>
              <p>Kiểm tra kỹ xe trước khi nhận và tự đổ nhiên liệu để lưu thông xe trên đường.</p>
              <p>
                Không được bóc hay làm rách tem bảo hành và đảm bảo sửa chữa, thay thế bất cứ chi
                tiết nào.
              </p>
              <p>
                Trong thời gian sử dụng xe thuê, bên B phải có trách nghiệm bảo vệ, giữ dìn và điều
                khiển xe tuân thủ đúng với luật oan toàn giao thông Việt Nam. Trường hợp xẩy ra vấn
                đề phát sinh sẽ được giải quyết như dưới đây:
              </p>
              <ul>
                <li>
                  Bên B phải báo lại cho bên A khi có các vấn đề hỏng hóc xẩy ra để hai bên thống
                  nhất phương án thực hiện.
                </li>
                <li>
                  Mọi sự cố bẹp, nứt, vỡ, móp méo các chi tiết của xe do người thuê gây ra thì người
                  thuê phải mua đồ của hãng thay thế (không chấp nhận gò, hàn).
                </li>
                <li>
                  Đối với việc thủng săm, thủng lốp khi lưu thông trên đường, khách thuê xe sẽ phải
                  tự khắc phục và trả khoản phí vá săm hoặc thay thế.
                </li>
                <li>
                  Các vết xước, bẹp nhẹ không phải thay đồ mới thì người thuê phải bồi thường cho
                  cho thuê số tiền theo báo giá thị trường.
                </li>
                <li>
                  Các ngày xe nghỉ không chạy được do lỗi của bên thuê, thì bạn vẫn phải trả tiền
                  cho các ngày đó như đang thuê xe để sử dụng.
                </li>
                <li>
                  Trường hợp người thuê xe vi phạm an toàn giao thông dẫn tới xe bị giữ thì người
                  thuê xe phải có tránh nhiệm đóng toàn bộ tiền các lỗi vi phạm và thời gian giữ xe
                  vẫn tính là ngày cho thuê xe. Mọi chi phí đi lại, ăn ở, vvv…của bên cho thuê để
                  giải quyết việc do bên thuê gây ra, bên thuê phải chịu hoàn toàn trách nhiệm chi
                  trả.
                </li>
                <li>
                  Trong thời gian thuê xe người thuê làm mất xe, gây tai nạn nghiêm trọng dẫn đến xe
                  bị phá hủy hoàn toàn thì người thuê phải chịu trách nhiệm đền tiền, giá trị tương
                  đương với giá trị xe được định giá tại thời điểm cho thuê xe.
                </li>
              </ul>
            </div>
            <div id="content5-right">
              <h2>Trách nhiệm bên cho thuê</h2>
              <p>
                Bên cho thuê phải đảm bảo xe cho thuê có đầy đủ điều kiện an toàn lưu thông trên
                đường, đúng như cam kết thỏa thuận với khách hàng. Với mỗi xe cho thuê chỉ đi kèm 02
                mũ bảo hiểm theo tiêu chuẩn.
              </p>
              <p>
                Cung cấp các giấy tờ sau cho người thuê xe: Bản photo giấy đăng ký xe, Bảo hiểm
                trách nhiệm dân sự xe. Có trách nhiêm giúp đỡ, hỗ trợ, hướng dẫn người thuê trong
                các tình huống cần có sự xuất hiện của chủ xe.
              </p>
              <h2>Đổi trả, chấm dứt hợp đồng</h2>
              <p>
                Trường hợp dịch vụ cung cấp không đúng như cam kết giữa 2 bên, khách hàng có quyền
                từ chối sử dụng dịch vụ hoặc yêu cầu thay thế xe bằng loại xe khác đúng như yêu cầu.
                Bên cho thuê xe phải có trách nhiệm gửi trả lại toàn bộ tiền đặt cọc cho khách nếu
                khách từ chối sử dụng dịch vụ trong trường hợp này.
              </p>
              <p>
                Trường hợp khách hàng kết thúc hợp đồng thuê xe máy sớm hơn thời gian thống nhất ghi
                trong hợp đồng, bên cho thuê chấp nhận thời điểm trả xe là thời điểm kết thúc hợp
                đồng và giá trị hợp đồng được tính đến thời điểm đó. Tiền thừa sẽ được hoàn trả lại
                khách.
              </p>
              <p>
                Đối với khách đã đặt lịch thuê xe, khách hàng có thể hủy bỏ lịch đặt xe bất kỳ lúc
                nào mà không phải chịu khoản chi phí kèm theo.
              </p>
            </div>
          </div>
        </div>
        <div className="privacy-footer"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
