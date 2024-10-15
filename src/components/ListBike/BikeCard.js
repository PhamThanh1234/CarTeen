import { useNavigate } from 'react-router-dom';
const BikeCard = ({ bike }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/detail', {
      state: {
        bikeName: bike.motorbikeName,
        price: bike.rentailPrice,
        img: bike.img,
      },
    });
  };
  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between">
      <div>
        <img
          src={bike.img}
          alt={`Motorbike ${bike.motorbikeName}`}
          className="w-full h-40 object-cover mb-4"
        />
        <div className="mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {bike.label}
          </span>
        </div>
        <div className="mb-2 text-sm">{bike.motorbikeName}</div>
        <div className="mb-2 text-red-600 font-bold">{bike.rentailPrice}</div>
        {bike.oldPrice && <div className="mb-2 text-gray-500 line-through">{bike.oldPrice}</div>}
      </div>
      <button
        className="w-full bg-yellow-400 text-white py-2 rounded mt-4"
        onClick={handleNavigate}
      >
        Chi tiết
      </button>
    </div>
  );
};
export default BikeCard;
