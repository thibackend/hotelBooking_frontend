import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [currentAction, setCurrentAction] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const openModal = (action, room) => {
    setCurrentAction(action);
    setIsModalOpen(true);
    setCurrentRoom(room);
    if (action === "create") {
      setName("");
      setDesc("");
      setPrice("");
      setCategory_id("");
      setSelectedServices([]);
      setSelectedImages([]);
    } else if (action === "edit") {
      setName(room.name);
      setDesc(room.desc);
      setPrice(room.price);
      setCategory_id(room.category_id);
      setSelectedImages([]);    }
  };

  const closeModal = () => {
    setCurrentAction(null);
    setIsModalOpen(false);
    setCurrentRoom(null);
    setName("");
    setDesc("");
    setPrice("");
    setCategory_id("");
    setSelectedServices([]);
    setSelectedImages([]);
  };

  useEffect(() => {
    fetchData();
    fetchCategories();
    fetchServices();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/room-and-images"
      );
      setRooms(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory_id(e.target.value);
  };

  const handleServiceSelection = (serviceId) => {
    setSelectedServices((prevSelectedServices) => {
      const updatedSelectedServices = prevSelectedServices.includes(serviceId)
        ? prevSelectedServices.filter((id) => id !== serviceId)
        : [...prevSelectedServices, serviceId];
      return updatedSelectedServices;
    });

    setServices((prevServices) => {
      const updatedServices = prevServices.map((service) => {
        if (service.id === serviceId) {
          return {
            ...service,
            selected: !service.selected,
          };
        }
        return service;
      });
      return updatedServices;
    });
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages([...selectedImages, ...files]);
  };
  
  const handleRemoveImage = (image) => {
    const filteredImages = selectedImages.filter((img) => img !== image);
    setSelectedImages(filteredImages);
  };
  

  const handleImageRemove = (imageURL) => {
    setSelectedImages((prevSelectedImages) =>
      prevSelectedImages.filter((image) => image !== imageURL)
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setNameError(false);
    setDescError(false);
    setPriceError(false);
    setCategoryError(false);

    let hasError = false;

    if (name.trim() === "") {
      setNameError(true);
      hasError = true;
    }

    if (desc.trim() === "") {
      setDescError(true);
      hasError = true;
    }

    if (price.trim() === "") {
      setPriceError(true);
      hasError = true;
    }

    if (currentAction === "create" || currentAction === "edit") {
      if (category_id === "") {
        setCategoryError(true);
        hasError = true;
      }
    }

    if (hasError) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("desc", desc.trim());
    formData.append("price", price.trim());
    formData.append("category_id", category_id);


    selectedServices.forEach((serviceId) => {
      formData.append("services[]", serviceId);
    });


    selectedImages.forEach((image) => {
      formData.append("images[]", image);
    });
    console.log(selectedImages);
    try {
      if (currentAction === "create") {
        await axios
          .post("http://127.0.0.1:8000/api/create-room", formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
      } else if (currentAction === "edit") {
        const roomId = currentRoom.id;
        await axios.put(`http://127.0.0.1:8000/api/rooms/${roomId}`, formData);
      }

      closeModal();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const roomId = currentRoom.id;
      await axios.delete(`http://127.0.0.1:8000/api/rooms/${roomId}`);
      closeModal();
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchServices = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/services");
      const servicesWithSelection = response.data.map((service) => ({
        ...service,
        selected: false,
      }));
      setServices(servicesWithSelection);
    } catch (error) {
      console.log(error);
    }
  };
  // Hàm để lấy danh sách dịch vụ từ API
  const fetchRoomServices = async (roomId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/room-service?room_id=${roomId}`
      );
      const roomServices = response.data;

      // Cập nhật danh sách dịch vụ đã chọn trước đó
      setSelectedServices(roomServices.map((service) => service.service_id));

      // Cập nhật trạng thái `selected` của các dịch vụ trong mảng `services`
      setServices((prevServices) => {
        const updatedServices = prevServices.map((service) => ({
          ...service,
          selected: roomServices.some(
            (roomService) => roomService.service_id === service.id
          ),
        }));
        return updatedServices;
      });
    } catch (error) {
      console.error("Error fetching room services:", error);
    }
  };

  // Gọi hàm fetchRoomServices trong useEffect khi roomId thay đổi
  useEffect(() => {
    if (currentAction === "edit") {
      fetchRoomServices(currentRoom.id);
    }
  }, [currentRoom]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h2 className="align-items:center">
                {" "}
                Danh sách phòng trong khách sạn
                <Button
                  className="button-add float-end"
                  onClick={() => openModal("create", null)}
                >
                  Thêm phòng mới
                </Button>
              </h2>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Tên phòng</th>
                    <th>Giá</th>
                    <th>Mô tả</th>
                    <th>Hình ảnh</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms && rooms.length > 0 ? (
                    rooms.map((room, index) => (
                      <tr key={index}>
                        <td>{room.id}</td>
                        <td>{room.name}</td>
                        <td>{room.price}</td>
                        <td>{room.desc}</td>
                        <td className="image-container">
                          {room.image_path.map((image, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={`http://localhost:8000/uploads/images/${image}`}
                              alt={`Room ${index + 1}`}
                              style={{ maxWidth: "100px" }}
                            />
                          ))}
                        </td>
                        <td className="action-button">
                          <Button
                            variant="success"
                            onClick={() => openModal("edit", room)}
                          >
                            Chỉnh sửa
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => openModal("delete", room)}
                          >
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">Không có phòng nào.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentAction === "create"
              ? "Thêm phòng"
              : currentAction === "edit"
              ? "Chỉnh sửa phòng"
              : "Xóa phòng"}
          </Modal.Title>
        </Modal.Header>
        {currentAction !== "delete" && (
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="md-3">
                <label htmlFor="name">Tên phòng</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={handleNameChange}
                />
                {nameError && (
                  <p className="error-message">Vui lòng nhập tên phòng *</p>
                )}
              </div>
              <div className="md-3">
                <label htmlFor="desc">Mô tả</label>
                <textarea
                  name="desc"
                  className="form-control"
                  value={desc}
                  onChange={handleDescChange}
                  rows={4}
                />
                {descError && (
                  <p className="error-message">Vui lòng nhập mô tả *</p>
                )}
              </div>
              <div className="md-3">
                <label htmlFor="price">Giá phòng/đêm</label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  value={price}
                  onChange={handlePriceChange}
                />
                {priceError && (
                  <p className="error-message">Vui lòng nhập giá phòng *</p>
                )}
              </div>
              {currentAction === "create" || currentAction === "edit" ? (
                <div className="md-3">
                  <label htmlFor="category_id">Loại phòng</label>
                  <select
                    name="category_id"
                    className="form-control"
                    value={category_id}
                    onChange={handleCategoryChange}
                  >
                    <option value="">Chọn loại phòng</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {categoryError && (
                    <p className="error-message">Vui lòng chọn loại phòng *</p>
                  )}
                </div>
              ) : null}
              {(currentAction === "create" || currentAction === "edit") && (
                <div className="mb-3">
                  <label className="form-label">Services</label>
                  {services &&
                    Array.isArray(services) &&
                    services.map((service) => (
                      <div key={service.id} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`service-${service.id}`}
                          checked={service.selected}
                          onChange={() => handleServiceSelection(service.id)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`service-${service.id}`}
                        >
                          {service.name}
                        </label>
                      </div>
                    ))}
                </div>
              )}

<div>
                <label>Images:</label>
                <input type="file" multiple onChange={handleImageChange} />
                {selectedImages.length > 0 && (
                  <div>
                    {selectedImages.map((image) => (
                      <div key={image.name} style={{display:"flex"}}>
                        <img
                        width={100} height={100}
                          src={URL.createObjectURL(image)}
                          alt={image.name}
                        />
                        <p>{image.name}</p>
                        <button onClick={() => handleRemoveImage(image)}>
                          X
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button variant="primary" type="submit">
                {currentAction === "create" ? "Thêm" : "Lưu"}
              </Button>
              <Button variant="secondary" onClick={closeModal}>
                Đóng
              </Button>
            </form>
          </Modal.Body>
        )}
        {currentAction === "delete" && (
          <Modal.Body>
            <p>Bạn có chắc chắn muốn xóa phòng này?</p>
            <Button variant="danger" onClick={handleDelete}>
              Xóa
            </Button>
            <Button variant="secondary" onClick={closeModal}>
              Hủy
            </Button>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
}

export default AdminPage;
