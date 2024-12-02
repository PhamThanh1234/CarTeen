import React, { useState } from 'react';
import './Bill.css';
import ModalInvoiceDetail from './ModalInvoiceDetail';

const Bill = ({ orders = [] }) => {
  const [Idinvoice, setIdinvoice] = useState();
  const [showModalInvoiceDetail, setshowModalInvoiceDetail] = useState(false);
  const handleViewInvoiceDetail = () => {
    setshowModalInvoiceDetail(true);
  };
  return (
    <div id="invoice" className="order-table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Ngày tạo đơn</th>
            <th>Số xe máy</th>
            <th>Trạng thái đơn hàng</th>
            <th>Số lượng</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <p>{order.invoiceId}</p>
                </td>
                <td>{new Date(order.createDate).toLocaleString()}</td>
                <td>{order.motorbikeIds}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'COMPLETED'
                        ? 'status-completed'
                        : order.status === 'PENDING'
                        ? 'status-pending'
                        : 'status-unpaid'
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>{order.count}</td>
                <td>
                  <button
                    className="btn-view-details"
                    onClick={() => {
                      handleViewInvoiceDetail();
                      setIdinvoice(order.invoiceId);
                    }}
                  >
                    Xem chi tiết
                  </button>
                  <ModalInvoiceDetail
                    show={showModalInvoiceDetail}
                    setShow={setshowModalInvoiceDetail}
                    Idinvoice={Idinvoice}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                Không có đơn hàng nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Bill;
