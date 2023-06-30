import { Link } from "react-router-dom";
import house from "../../assets/house.jpg";
import Rentalnew from "./Rentalnew";
import { useEffect, useState, useRef } from "react";
import { getRooms } from "./../../services/home/index";
import { FiSearch } from "react-icons/fi";

const Rentals = (props) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState("");
  const [roomPrice, setRoomPrice] = useState(null);
  const [services, setServices] = useState([]);
  const [roomServices, setRoomServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const filterRef = useRef(null);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOptions(selectedValue);
  };

  const handlePriceChange = (event) => {
    const newPrice = parseInt(event.target.value);
    setRoomPrice(newPrice || 0);
  };

  const handleIconClick = () => {
    setShowFilter(!showFilter);
  };

  const handleAllOption = () => {
    setSelectedOptions("");
    setRoomPrice(null);
    setSelectedServices([]);
  };

  const handleServiceChange = (event) => {
    const serviceId = event.target.value;
    setSelectedServices((prevServices) => {
      if (prevServices.includes(serviceId)) {
        return prevServices.filter((id) => id !== serviceId);
      } else {
        return [...prevServices, serviceId];
      }
    });
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

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/services");
        const servicesData = await response.json();
        setServices(servicesData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/categories");
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    const fetchRoomService = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/room-service");
        const roomServiceData = await response.json();
        setRoomServices(roomServiceData);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    Promise.all([fetchServices(), fetchCategories(), fetchRoomService()])
      .then(() => {
        // Once all API calls are completed successfully, update the filteredData state
        setFilteredData(data);
      })
      .catch((error) => {
        console.error("Error fetching data from APIs:", error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rooms = await getRooms();
        setData(rooms);
        setFilteredData(rooms);
      } catch (error) {
        console.error("Error fetching rooms data from API:", error);
      }
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    let filteredRooms = [...data];
  
    // Apply category filter
  if (selectedOptions !== "") {
    filteredRooms = filteredRooms.filter(
      (room) => room.category_id.toString() === selectedOptions
    );
  }
  
    // Apply room price filter
    if (roomPrice !== null) {
      filteredRooms = filteredRooms.filter((room) => room.price <= roomPrice);
    }
  
    // Apply room service filter
    if (selectedServices.length > 0) {
      filteredRooms = filteredRooms.filter((room) => {
        if (room.roomServices && room.roomServices.length > 0) {
          const roomServiceIds = room.roomServices.map(
            (roomServiceData) => roomServiceData.service_id
          );
          return selectedServices.some((serviceId) =>
            roomServiceIds.includes(serviceId)
          );
        }
        return false;
      });
    }
  
    setFilteredData(filteredRooms);
  };
  

  useEffect(() => {
    // Call the applyFilters function whenever the filter options change
    applyFilters();
  }, [selectedOptions, roomPrice, selectedServices]);

  const checkboxListStyle = {
    maxHeight: "70px",
    overflowY: "auto",
  };

  return (
    <div>
      <button
        style={{
          position: "relative",
          left: 400,
          borderColor: "#ff5a60",
          borderWidth: "2px",
          borderStyle: "solid",
        }}
        className="hidden lg:flex justify-center items-center relative rounded-full"
        onClick={handleIconClick}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="flex justify-between relative w-full font-semibold text-gray-600">
            <span style={{ marginRight: "9rem" }}>Room type</span>
            <span style={{ marginRight: "9rem" }}>Service</span>
            <span style={{ marginRight: "1rem" }}>Room price</span>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full">
            <FiSearch className="text-white w-full" />
          </div>
        </div>
      </button>

      {showFilter && (
        <div
          ref={filterRef}
          style={{
            left: 0,
            right: 0,
            width: 600,
            height: 100,
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className=" bg-white mt-2 w-[30rem] border border-gray-200 rounded-lg shadow-lg"
        >
          <button
            style={{
              backgroundColor: "#ff5a60",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleAllOption}
          >
            All
          </button>
          <label style={{ marginBottom: "5px" }}>
            <select
              style={{ padding: 10 }}
              value={selectedOptions}
              onChange={handleOptionChange}
            >
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  <span style={{ wordBreak: "break-word" }}>
                    {category.name}
                  </span>
                </option>
              ))}
            </select>
          </label>
          <label>
            <div style={checkboxListStyle}>
              {services &&
                services.map((service) => (
                  <div
                    key={service.id}
                    className="flex items-center"
                    style={{ padding: 10 }}
                  >
                    <input
                      type="checkbox"
                      value={service.id.toString()}
                      checked={selectedServices.includes(service.id.toString())}
                      onChange={handleServiceChange}
                    />
                    <span>{service.name}</span>
                  </div>
                ))}
            </div>
          </label>
          <label>
            <div style={{ padding: 10 }}>
              <input
                type="range"
                min="0"
                max="1000"
                value={roomPrice}
                onChange={handlePriceChange}
              />
              <div className="flex justify-between text-xs">
                <span>$0</span>
                <span>${roomPrice}</span>
                <span>$1000</span>
              </div>
            </div>
          </label>
        </div>
      )}

      <div className="py-3 sm:py-5">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 "
          style={{ flexWrap: "wrap" }}
        >
          {filteredData.length > 0 ? (
            <Rentalnew data={filteredData} />
          ) : (
            <h1>No data found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rentals;
