import React from "react";

const updateUser = updatedUser => {
    axios
        .put(`http://127.0.0.1:8000/api/users/${updatedUser.id}`, updatedUser)
        .then(res => {
            console.log(res);
            // Xử lý thành công, cập nhật lại thông tin người dùng
            setUser(updatedUser);
        })
        .catch(error => {
            console.log(error);
        });
};

const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = e => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData };
    updateUser(updatedUser);
};

function EditProfile() {
    return (
        <div>
            <h3>Edit Profile</h3>
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
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default EditProfile;