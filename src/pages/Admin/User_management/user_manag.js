import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./user.css";
import Loading from '../loading';
import { Modal, Button } from 'react-bootstrap';

function User_manag() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        image: ''
    });

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const openDeleteModal = (userId) => {
        setSelectedUserId(userId);
        setShowDeleteModal(true);
    };

    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    const openEditModal = (user) => {
        setEditingUser(user);
        setFormData({
            name: user.name,
            email: user.email,
            address: user.address,
            phone: user.phone,
            image: user.image,
        });
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setEditingUser(null);
        setShowEditModal(false);
    };

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/users')
            .then(res => {
                console.log(res);
                setUsers(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = { ...editingUser, ...formData };
        handleEditUser(updatedUser);
    };

    const handleEditUser = (updatedUser) => {
        axios
            .put(`http://127.0.0.1:8000/api/users/${updatedUser.id}`, updatedUser)
            .then(res => {
                console.log(res);
                // Xử lý thành công, cập nhật lại danh sách người dùng
                axios
                    .get('http://127.0.0.1:8000/api/users')
                    .then(res => {
                        setUsers(res.data);
                        setShowSuccessModal(true); // Hiển thị modal thông báo thành công
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
        closeEditModal();
    };

    const deleteUser = (userId) => {
        setSelectedUserId(userId);
        setShowDeleteModal(true);
    };

    const confirmDeleteUser = () => {
        axios
            .delete(`http://127.0.0.1:8000/api/users/${selectedUserId}`)
            .then(res => {
                console.log(res);
                // Xóa thành công, cập nhật lại danh sách người dùng
                axios
                    .get('http://127.0.0.1:8000/api/users')
                    .then(res => {
                        setUsers(res.data);
                        setShowSuccessModal(true); // Hiển thị modal thông báo thành công
                    })
                    .catch(error => {
                        console.log(error);
                    });
            })
            .catch(error => {
                console.log(error);
            });
        closeDeleteModal();
    };

    const handleSuccessModalClose = () => {
        setShowSuccessModal(false);
    };

    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>User_ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='image-user'>
                                <img src={user.image} alt='' />
                            </td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td className='action-button'>
                                <button className='btn btn-success' onClick={() => openEditModal(user)}>Chỉnh sửa</button>
                                <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showDeleteModal} onHide={closeDeleteModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa tài khoản này?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDeleteModal}>
                        Hủy
                    </Button>
                    <Button variant="danger" onClick={confirmDeleteUser}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={closeEditModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Chỉnh sửa thông tin khách hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {editingUser && (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className='mt-3' type="submit">Save</button>
                        </form>
                    )}
                </Modal.Body>
            </Modal>

            <Modal show={showSuccessModal} onHide={handleSuccessModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thành công</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thông tin người dùng đã được cập nhật thành công.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSuccessModalClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default User_manag;
