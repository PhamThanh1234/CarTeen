import { useState, useEffect } from 'react';
import LocationButtons from './LocationButtons';
import BikeGird from './BikeGird';
import { getAllBikes } from '../../services/apiService';
import React from 'react';
import { Spin } from 'antd';

import SearchBar from './SearchBar';

const ListBike = () => {
  const locations = [
    'Tam Trinh',
    'Cầu Giấy',
    'Ngã Tư Sở',
    'Thanh Xuân',
    'Xa La',
    'Nhổn',
    'Bách Khoa',
    'Hồ Hoàn Kiếm',
    'Mai Động',
    'Sơn Tây',
  ];
  const [appLoading, setAppLoading] = useState(false);
  const [bikes, setListBike] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchListBike();
  }, []);

  const fetchListBike = async () => {
    setAppLoading(true);
    const res = await getAllBikes();
    if (res) {
      setListBike(res);
    }
    setAppLoading(false);
  };

  const handleLocationClick = (locationName) => {
    setSelectedLocation(selectedLocation === locationName ? null : locationName);
  };

  const handleSearch = (text) => {
    setSearchText(text.toLowerCase());
  };

  const filteredBikes = bikes.filter((bike) => {
    const matchesLocation = selectedLocation ? bike.locationName === selectedLocation : true;
    const matchesSearch = bike.motorbikeName.toLowerCase().includes(searchText);
    return matchesLocation && matchesSearch;
  });

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <LocationButtons
        locations={locations}
        selectedLocation={selectedLocation}
        onLocationClick={handleLocationClick}
      />
      {appLoading ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Spin />
        </div>
      ) : (
        <BikeGird bikes={filteredBikes} />
      )}
    </div>
  );
};

export default ListBike;
