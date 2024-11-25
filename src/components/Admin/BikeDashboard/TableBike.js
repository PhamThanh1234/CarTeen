const TableBike = (props) => {
  const { listBike } = props;

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listBike &&
            listBike.length > 0 &&
            listBike.map((item, index) => {
              return (
                <tr key={`table-user - ${index}`}>
                  <th scope="row">{item.motorbikeId}</th>
                  <td>{item.typeName}</td>
                  <td>{item.motorbikeName}</td>
                  <td>{item.locationName}</td>
                  <td>{item.licensePlate}</td>
                  <td>{item.rentalPrice}</td>
                  <td>{item.status}</td>

                  <td>
                    <button className="btn btn-primary">Edit</button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => {
                        props.handleClickBtnUpdate(item);
                      }}
                    >
                      Update{' '}
                    </button>

                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => {
                        props.handleClickBtnDelete(item);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listBike && listBike.length === 0}
        </tbody>
      </table>
    </>
  );
};

export default TableBike;
