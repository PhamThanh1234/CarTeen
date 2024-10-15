import Accordion from 'react-bootstrap/Accordion';
import './Questions.css';

const Question = () => {
  return (
    <div className="container-questions">
      <div className="title-questions">
        <h2>Một số câu hỏi thường gặp</h2>
      </div>
      <div className="questions">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Tại sao nên thuê xe máy tại MotorBike?</Accordion.Header>
            <Accordion.Body>
              Vexere là nền tảng vận tải dành cho hành khách lớn nhất và uy tín tại Việt Nam, với
              các dịch vụ như vé xe khách, vé tàu, vé máy bay và thuê xe. Thuê xe máy tại Vexere cho
              phép bạn được lựa chọn các gói thuê xe đa dạng tại hầu hết các địa điểm du lịch trên
              toàn quốc. Bên cạnh đó, giá cả và chính sách thuê xe minh bạch, cùng đội ngũ chăm sóc
              khách hàng tận tình sẽ giúp bạn đưa ra lựa chọn thuê xe phù hợp nhất cho nhu cầu di
              chuyển.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Làm thế nào để thanh toán cước phí thuê xe máy?</Accordion.Header>
            <Accordion.Body>
              Bạn có thể thanh toán giá trị thuê xe máy cho Vexere hoặc thanh toán khi nhận xe tại
              điểm hẹn hoặc có thể thanh toán trực tiếp trên website.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tại sao nên thuê xe máy tại MotorBike?</Accordion.Header>
            <Accordion.Body>
              Vexere là nền tảng vận tải dành cho hành khách lớn nhất và uy tín tại Việt Nam, với
              các dịch vụ như vé xe khách, vé tàu, vé máy bay và thuê xe. Thuê xe máy tại Vexere cho
              phép bạn được lựa chọn các gói thuê xe đa dạng tại hầu hết các địa điểm du lịch trên
              toàn quốc. Bên cạnh đó, giá cả và chính sách thuê xe minh bạch, cùng đội ngũ chăm sóc
              khách hàng tận tình sẽ giúp bạn đưa ra lựa chọn thuê xe phù hợp nhất cho nhu cầu di
              chuyển.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Nếu không có bằng lái, tôi có thể thuê xe máy được không?
            </Accordion.Header>
            <Accordion.Body>
              Nếu không có bằng lái/giấy phép lái xe, bạn có thể thuê xe máy điện hoặc một số loại
              xe máy cỡ nhỏ có dung tích xi lanh dưới 50cc. Để thuê các loại xe máy phổ thông như xe
              số 110cc trở lên, bạn bắt buộc cần mang theo để xuất trình được GPLX khi di chuyển
              bằng xe máy trên đường.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Tôi có thể xem báo giá thuê xe máy ở đâu?</Accordion.Header>
            <Accordion.Body>
              Để xem giá thuê và chi tiết các gói Thuê xe máy tại mỗi địa điểm du lịch, vui lòng
              truy cập:
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Nếu muốn hủy thuê xe máy tôi cần làm gì?</Accordion.Header>
            <Accordion.Body>
              Để hủy thuê xe máy, vui lòng liên hệ nhân viên tư vấn của Vexere hoặc liên hệ nhà xe
              qua số điện thoại trong tin nhắn xác nhận.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Tôi có thể thay đổi thông tin thuê xe đã được xác nhận bằng cách nào?
            </Accordion.Header>
            <Accordion.Body>
              Để thay đổi các thông tin thuê xe như điểm nhận & trả xe, thời gian nhận & trả xe…,
              vui lòng liên hệ nhân viên tư vấn của Vexere.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Question;
