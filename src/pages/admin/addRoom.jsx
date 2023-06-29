import React, { useState } from "react";
import {Link } from 'react-router-dom';
import axios from "axios";

function AddRoom() {
  const [room, setRoom] = useState({
    name: '',
    desc: '',
    price: '',
    category_id: '',
    image: [],
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setRoom(prevRoom => ({
      ...prevRoom, 
      [name]: value,
    }));
  };

  const handleImageChange = e => {
    const files = Array.form(e.target.files);
    const formData = new FormData();

    files.forEach((file, index) => {
      formData.append(index, file);
    });

    axios 
    .post(`http://127.0.0.1:8000/api/upload-images`, formData)
    .then(res => {
      const images = res.data.map(image => image.url);
      setRoom(prevRoom => ({
        ...prevRoom,
        images,
      }));
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleSubmit = e => {
    e.prevenDefault();
    axios 
    .post(`http://127.0.0.1:8000/api/add-room`, room)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
  };

return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Thêm phòng
                <button className="btn btn-danger float-end">Back</button>
              </h4>
              <div className="card-body">
                <form onClick={handleSubmit}>
                  <div className="md-3">
                    <label htmlFor="name">Tên phòng </label>
                    <input type="text" name="name" className="form-control" />
                  </div>
                  <div className="md-3">
                    <label htmlFor="desc">Mô tả </label>
                    <input type="text" name="desc" className="form-control" />
                  </div>
                  <div className="md-3">
                    <label htmlFor="price">Giá phòng/đêm</label>
                    <input type="text" name="price" className="form-control" />
                  </div>
                  <div className="md-3">
                    <label htmlFor="typeRoom">Chọn kiểu phòng</label>
                    <select name="category_id">
                      <option value="1">Phòng đơn</option>
                      <option value="2">Phòng đôi</option>
                      <option value="3">Phòng gia đình</option>
                      <option value="4">Phòng luxury</option>
                      <option value="5">Phòng hội nghị</option>
                    </select>
                  </div>
                  <div className="md-3">
                    <label htmlFor="image">Hình ảnh</label>
                    <input type="file" name="image" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary">Thêm phòng</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;