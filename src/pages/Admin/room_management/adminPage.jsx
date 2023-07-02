import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../loading';

function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAction, setCurrentAction] = useState(null);

  const openModal = (action) => {
    setCurrentAction(action);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setCurrentAction(null);
    setIsModalOpen(false);
  };

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

  if (loading) {
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
              <Link to={`create`} className="btn btn-primary float-end">Thêm phòng</Link>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Stt</th>
                    <th>Tên phòng</th>
                    <th>Giá</th>
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
                        <td className='action-button'>
                          <Link to={`edit`} className="btn btn-success">Change</Link>
                          <Link to={`delete`} className="btn btn-danger">Delete</Link>
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

export default AdminPage;