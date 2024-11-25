import React from 'react';
import './Bill.css';

const Bill = ({ orders = [] }) => {
  return (
    <div id="invoice" className="order-table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Mã đơn hàng</th>
            <th>Ngày tạo đơn</th>
            <th>Số xe máy</th>
            <th>Trạng thái đơn hàng</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <a href="#">{order.invoiceId}</a>
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
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
