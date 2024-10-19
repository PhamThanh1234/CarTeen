import { useState, useEffect, useContext } from 'react';
import LocationButtons from './LocationButtons';
import BikeGird from './BikeGird';
import { getAllBikes } from '../../services/apiService';
import React from 'react';
// import { Spin } from 'antd';
import { AuthContext } from '../Context/authcontext';
const ListBike = () => {
  const locations = [
    'Đà Lạt',
    'Nha Trang',
    'Vũng Tàu',
    'Mũi Né - Phan Thiết',
    'Buôn Mê Thuột',
    'Quy Nhơn',
    'Đà Nẵng',
    'Huế',
    'Sa Pa',
    'Hà Giang',
    'Hạ Long',
    'Hải Phòng',
  ];
  const [bikes, setListBike] = useState([
    {
      motorbikeID: 'XM01',
      img: 'https://denledxe.com/uploads/page/2020_12/Honda-AirBlade-150-2021.jpg',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Vũng Tàu',
      rentailPrice: '140.000đ/ngày',
      locationName: 'Vũng Tàu',
    },
    {
      motorbikeID: 'XM02',
      img: 'https://cafefcdn.com/203337114487263232/2020/10/12/photo-1-1602466899550214513873.jpg',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Quy Nhơn',
      rentailPrice: '150.000đ/ngày',
      locationName: 'Quy Nhơn',
    },
    {
      motorbikeID: 'XM03',
      img: 'https://giadinh.mediacdn.vn/296230595582509056/2023/2/24/bang-gia-xe-honda-vision-moi-nhat-thang-2-2023-tai-dai-ly-1676541768-1-1677211944292-16772119446001040135892.jpg',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Nha Trang',
      rentailPrice: '130.000đ/ngày',
      locationName: 'Nha Trang',
    },
    {
      motorbikeID: 'XM04',
      img: 'https://media.vneconomy.vn/w900/images/upload/2022/04/22/sh-mode-gia-automotor.jpg',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Mũi Né Phan Thiết',
      rentailPrice: '150.000đ/ngày',
      oldrentailPrice: '160.000đ',
      locationName: 'Mũi Né - Phan Thiết',
    },
    {
      motorbikeID: 'XM05',
      img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/15/963840/Grey_Sproty.jpg',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Huế',
      rentailPrice: '130.000đ/ngày',
      locationName: 'Huế',
    },
    {
      motorbikeID: 'XM06',
      img: 'https://cafefcdn.com/203337114487263232/2023/9/11/xe1-09111706-1694418573819-16944185740351982454686.png',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Đà Nẵng',
      rentailPrice: '120.000đ/ngày',
      locationName: 'Đà Nẵng',
    },
    {
      motorbikeID: 'XM07',
      img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2024/8/1/1374533/Xe-May-So-10.jpg',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Đà Lạt – Honda Airblade, Honda Vision',
      rentailPrice: '100.000đ/ngày',
      oldrentailPrice: '120.000đ',
      locationName: 'Đà Lạt',
    },
    {
      motorbikeID: 'XM08',
      img: 'https://cdn.honda.com.vn/motorbikes/April2023/cJR8qMLTikFpadg3zQan.png',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe tay ga 125cc tại Buôn Mê Thuột',
      rentailPrice: '140.000đ/ngày',
      oldrentailPrice: '150.000đ',
      locationName: 'Buôn Mê Thuột',
    },
    {
      motorbikeID: 'XM09',
      img: 'https://cdn.honda.com.vn/motorbikes/August2024/WygAqXwJo74BFJ3EZ6Bg.png',
      label: 'Giao xe tận nơi',
      motorbikeName: 'Thuê xe số 115cc tại Đà Lạt – Yamaha PG-1',
      rentailPrice: '170.000đ/ngày',
      locationName: 'Đà Lạt',
    },
    {
      motorbikeID: 'XM010',
      img: 'https://image.bnews.vn/MediaUpload/Org/2020/08/12/144532-frontview-1-.jpg',
      label: 'Chỗ nghỉ miễn phí',
      motorbikeName: 'Thuê xe số 110cc tại Hà Giang',
      rentailPrice: '180.000đ/ngày',
      locationName: 'Hà Giang',
    },
  ]);

  useEffect(() => {
    fetchListBike();
  }, []);
  const fetchListBike = async () => {
    const res = await getAllBikes();
    if (res) {
      setListBike(res);
    }
  };
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (locationName) => {
    if (selectedLocation === locationName) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(locationName);
    }
  };

  const filteredBikes = selectedLocation
    ? bikes.filter((bike) => bike.locationName === selectedLocation)
    : bikes;

  return (
    <div className="container mx-auto p-4">
      <LocationButtons
        locations={locations}
        selectedLocation={selectedLocation}
        onLocationClick={handleLocationClick}
      />
      {/* {appLoading === true ? (
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
        <>
          <BikeGird bikes={filteredBikes} />
        </>
      )} */}
      <BikeGird bikes={filteredBikes} />
    </div>
  );
};

export default ListBike;
