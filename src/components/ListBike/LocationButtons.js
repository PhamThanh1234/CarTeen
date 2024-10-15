const LocationButtons = (props) => {
  const { locations, selectedLocation, onLocationClick } = props;
  return (
    <div className="mb-4">
      <span className="font-bold">Tìm kiếm nhiều:</span>
      {locations.map((location, index) => (
        <button
          key={index}
          className={`ml-2 mb-2 px-4 py-2 border rounded-full ${
            selectedLocation === location ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => onLocationClick(location)}
        >
          {location}
        </button>
      ))}
    </div>
  );
};

export default LocationButtons;
