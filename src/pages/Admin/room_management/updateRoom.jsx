import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

function EditRoom({ room }) {
  const [name, setName] = useState(room && room.name);
  const [desc, setDesc] = useState(room && room.desc);
  const [price, setPrice] = useState(room && room.price);
  const [category_id, setCategory_id] = useState(room && room.category_id);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/rooms/${room.id}`, {
        name,
        desc,
        price,
        category_id,
      });

      console.log(response.data);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>Edit</button>

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Room</Modal.Title>
        </Modal.Header>
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
            </div>
            <div className="md-3">
              <label htmlFor="desc">Mô tả</label>
              <input
                type="text"
                name="desc"
                className="form-control"
                value={desc}
                onChange={handleDescChange}
              />
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
            </div>
            <div className="md-3">
              <label htmlFor="typeRoom">Chọn kiểu phòng</label>
              <select
                name="category_id"
                id="typeRoom"
                value={category_id}
                onChange={handleCategoryChange}
              >
                <option value="">Select category</option>
                {/* Render your categories options here */}
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditRoom;