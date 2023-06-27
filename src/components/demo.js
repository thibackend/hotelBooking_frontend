import React, { useState, useEffect, useRef } from 'react';

const SearchFilter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const filterRef = useRef(null);

  const handleIconClick = () => {
    setShowFilter(!showFilter);
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
    };

    const handleScroll = () => {
      if (filterRef.current) {
        const filterRect = filterRef.current.getBoundingClientRect();
        if (filterRect.bottom <= 0) {
          setShowFilter(false);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleIconClick}>Icon tìm kiếm</button>
      </div>
      {showFilter && (
        <div ref={filterRef}>
          <h4>Filter Options:</h4>
          <label>
            <input
              type="checkbox"
              value="option1"
              checked={selectedOptions.includes('option1')}
              onChange={() => handleCheckboxChange('option1')}
            />
            Option 1
          </label>
          <label>
            <input
              type="checkbox"
              value="option2"
              checked={selectedOptions.includes('option2')}
              onChange={() => handleCheckboxChange('option2')}
            />
            Option 2
          </label>
          <label>
            <input
              type="checkbox"
              value="option3"
              checked={selectedOptions.includes('option3')}
              onChange={() => handleCheckboxChange('option3')}
            />
            Option 3
          </label>
          {/* Thêm các phần tử checkbox và các thành phần lọc khác tại đây */}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
