import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getInvoiceDetail } from '../../services/apiService';

const ModalInvoiceDetail = (props) => {
  const { show, setShow, Idinvoice } = props;

  const [invoiceDetail, setInvoiceDetail] = useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const fetchDetail = async () => {
    try {
      const res = await getInvoiceDetail(Idinvoice);
      console.log(Idinvoice);
      if (res) {
        setInvoiceDetail(res);
      } else {
        toast.error('Không tìm thấy chi tiết hóa đơn');
      }
    } catch (error) {
      toast.error('Lỗi khi tải chi tiết hóa đơn');
    }
  };

  useEffect(() => {
    if (show) {
      fetchDetail();
    }
  }, [show]);

  return (
    <>
      <Modal backdrop="static" show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết hóa đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {invoiceDetail ? (
            <div className="invoice-detail">
              <p>
                <strong>Mã hóa đơn:</strong> {invoiceDetail.invoiceId}
              </p>
              <p>
                <strong>Tên xe máy:</strong> {invoiceDetail.motorbikeName}
              </p>
              <p>
                <strong>Ngày nhận xe:</strong>{' '}
                {new Date(invoiceDetail.receiptDate).toLocaleString()}
              </p>
              <p>
                <strong>Ngày trả xe:</strong> {new Date(invoiceDetail.paymentDate).toLocaleString()}
              </p>
              <p>
                <strong>Giá thuê:</strong> {invoiceDetail.rentalPrice.toLocaleString()} VND
              </p>
              <p>
                <strong>Thời gian thuê:</strong> {invoiceDetail.rentalHours} giờ
              </p>
              <p>
                <strong>Tổng tiền:</strong> {invoiceDetail.totalAmount.toLocaleString()} VND
              </p>
              <p>
                <strong>Ghi chú:</strong> {invoiceDetail.notes}
              </p>
            </div>
          ) : (
            <p>Đang tải chi tiết hóa đơn...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInvoiceDetail;
