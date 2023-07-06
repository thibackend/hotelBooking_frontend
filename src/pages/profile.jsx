import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/users/9')
            .then(res => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <div>
                <img src={user.image} alt="User Avatar" />
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Address: {user.address}</p>
                <p>Phone: {user.phone}</p>
            </div>
        </div>
    );
}

export default UserProfile;
