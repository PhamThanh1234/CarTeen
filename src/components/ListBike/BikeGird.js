import BikeCard from './BikeCard';

const BikeGird = (props) => {
  const { bikes } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {Array.isArray(bikes) ? (
        bikes.map((bike, index) => <BikeCard key={index} bike={bike} />)
      ) : (
        <p>No bikes available.</p>
      )}
    </div>
  );
};
export default BikeGird;
