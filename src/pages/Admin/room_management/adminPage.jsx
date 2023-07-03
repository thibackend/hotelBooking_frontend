import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

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

  const [nameError, setNameError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const openModal = (action, room) => {
    setCurrentAction(action);
    setIsModalOpen(true);
    setCurrentRoom(room);
    if (action === 'edit') {
      setName(room.name);
      setDesc(room.desc);
      setPrice(room.price);
      setCategory_id(room.category_id);
    }
  };

  const closeModal = () => {
    setCurrentAction(null);
    setIsModalOpen(false);
    setCurrentRoom(null);
    setName('');
    setDesc('');
    setPrice('');
    setCategory_id('');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/room-and-images');
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

    try {
      if (currentAction === 'create') {
        await axios.post('http://127.0.0.1:8000/api/rooms', {
          name,
          desc,
          price,
          category_id,
        });
      } else if (currentAction === 'edit') {
        const roomId = currentRoom.id;
        await axios.put(`http://127.0.0.1:8000/api/rooms/${roomId}`, {
          name,
          desc,
          price,
          category_id,
        });
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

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <Button variant="primary" onClick={() => openModal('create', null)}>Thêm phòng mới</Button>
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
                              src={image}
                              alt={`Room ${index + 1}`}
                              style={{ maxWidth: '100px' }}
                            />
                          ))}
                        </td>
                        <td className='action-button'>
                          <Button variant="success" onClick={() => openModal('edit', room)}>Chỉnh sửa</Button>
                          <Button variant="danger" onClick={() => openModal('delete', room)}>Xóa</Button>
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
          <Modal.Title>{currentAction === 'create' ? 'Thêm phòng' : currentAction === 'edit' ? 'Chỉnh sửa phòng' : 'Xóa phòng'}</Modal.Title>
        </Modal.Header>
        {currentAction !== 'delete' && (
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
                {nameError && <p className="error-message">Vui lòng nhập tên phòng *</p>}
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
                {descError && <p className="error-message">Vui lòng nhập mô tả *</p>}
              </div>
              <div className="md-3">
                <label htmlFor="price">Giá phòng/đêm</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={price}
                  onChange={handlePriceChange}
                />
                {priceError && (
                  <p className="error-message">Vui lòng nhập giá phòng *</p>
                )}
              </div>
              {currentAction === 'create' || currentAction === 'edit' ? (
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
                  {categoryError && <p className="error-message">Vui lòng chọn loại phòng *</p>}
                </div>
              ) : null}
              <Button variant="primary" type="submit">
                {currentAction === 'create' ? 'Thêm' : 'Lưu'}
              </Button>
              <Button variant="secondary" onClick={closeModal}>
                Đóng
              </Button>
            </form>
          </Modal.Body>
        )}
        {currentAction === 'delete' && (
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
