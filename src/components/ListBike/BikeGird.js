import BikeCard from './BikeCard';

const BikeGird = ({ bikes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {bikes.map((bike, index) => (
        <BikeCard key={index} bike={bike} />
      ))}
    </div>
  );
};
export default BikeGird;
