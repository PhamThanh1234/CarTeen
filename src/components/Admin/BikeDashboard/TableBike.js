import React, { useState } from 'react';

const TableBike = (props) => {
  const { listBike, handleClickBtnUpdate, handleClickBtnDelete } = props;

  // Số lượng mục trên mỗi trang
  const itemsPerPage = 10;

  // Trạng thái trang hiện tại
  const [currentPage, setCurrentPage] = useState(1);

  // Tổng số trang
  const totalPages = Math.ceil(listBike.length / itemsPerPage);

  // Tính danh sách xe hiển thị cho trang hiện tại
  const currentItems = listBike.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Hàm chuyển trang
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Hàm tạo danh sách nút phân trang với dấu "..."
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Hiển thị các trang đầu tiên
    if (currentPage > 3) {
      pageNumbers.push(1);
      if (currentPage > 4) pageNumbers.push('...');
    }

    // Hiển thị các trang xung quanh trang hiện tại
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pageNumbers.push(i);
    }

    // Hiển thị các trang cuối cùng
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">MotorbikeId</th>
            <th scope="col">Loại xe</th>
            <th scope="col">Tên xe</th>
            <th scope="col">Địa điểm</th>
            <th scope="col">Biển số xe</th>
            <th scope="col">Giá thuê</th>
            <th scope="col">Trạng thái</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={`table-bike-${index}`}>
              <th scope="row">{item.motorbikeId}</th>
              <td>{item.typeName}</td>
              <td>{item.motorbikeName}</td>
              <td>{item.locationName}</td>
              <td>{item.licensePlate}</td>
              <td>{item.rentalPrice}</td>
              <td>{item.status}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning mx-3" onClick={() => handleClickBtnUpdate(item)}>
                  Update
                </button>
                <button className="btn btn-danger ml-2" onClick={() => handleClickBtnDelete(item)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {currentItems.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center">
                No bikes available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Phân trang */}
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-outline-primary mx-1"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {renderPageNumbers().map((page, index) =>
          page === '...' ? (
            <span key={index} className="mx-2">
              ...
            </span>
          ) : (
            <button
              key={index}
              className={`btn mx-1 ${currentPage === page ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          )
        )}
        <button
          className="btn btn-outline-primary mx-1"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default TableBike;
