import { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const handleSearch = () => {
      onSearch(searchText);
    };
    handleSearch();
  });
  return (
    <div className="flex items-center space-x-2 p-4 rounded-lg w-4/5 mx-auto container-searchbar">
      <div className="flex items-center bg-white p-2 rounded-lg shadow-sm flex-grow">
        <i className="fas fa-search text-gray-500"></i>
        <input
          type="text"
          placeholder="Nhập tên xe..."
          className="ml-2 outline-none flex-grow"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div className="relative"></div>
      <button className="bg-black text-white p-2 rounded-lg" onClick={() => onSearch(searchText)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
