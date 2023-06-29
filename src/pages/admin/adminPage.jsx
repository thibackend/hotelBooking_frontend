import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./styleAdmin.css";
import Loading from './loading';

function Admin() {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/room-and-images')
      .then(res => {
        console.log(res);
        setRooms(res.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if(loading) {
    return (
      <div>
       <Loading />
      </div>
    )
  }

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Danh sách tất cả phòng trong trang web
              {/*<Link to="/admin/create" className="btn btn-primary float-end">Add room</Link>*/}
              <button className='btn btn-succ'>Thêm phòng</button>
              </h4>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>Stt</td>
                    <th>Tên phòng</th>
                    <th>Giá phòng/đêm</th>
                    <th>Mô tả</th>
                    <th>Hình ảnh phòng</th>
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
                        <td>
                          <button className="btn btn-success">Edit</button>
                          <button className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No rooms available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;