import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';

function AddRoom() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategory_id] = useState("");
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
      const response = await axios.post("http://127.0.0.1:8000/api/rooms", {
        name,
        desc,
        price,
        category_id,
      });

      console.log(response.data);
      setName("");
      setDesc("");
      setPrice("");
      setCategory_id("");
      setIsModalOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  return (
    <div className=" mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Thêm phòng
                <button className="btn btn-danger float-end">Back</button>
              </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="md-3">
                  <label htmlFor="name">Tên phòng </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="md-3">
                  <label htmlFor="desc">Mô tả </label>
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
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Thêm phòng
                </button>
              </form>
              <Modal show={isModalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Thêm phòng thành công!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                  <Button onClick={closeModal} className="btn btn-danger">Đóng</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;
