import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./user.css";
import Loading from '../loading';

function User_manag() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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

    if(loading) {
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
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='image-user'>
                                <img src={user.image} alt={`User ${user.id} Image`} />
                            </td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User_manag;