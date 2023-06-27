import React, {useState } from "react";
import axios from "axios";

function addRoom() {

    const AddRoom = () => {
        const [name, setName] = useState('');
        const [desc, setDesc] = useState('');
        const [contact, setContact] = useState('');
        const [address, setAdress] = useState('');
        const [image, setImage] = useState('');
    }

    const handelNameChange = (e) => {
        setName(e.taget.value);
    }
    const handelDescChange = (e) => {
        setDesc(e.taget.value);
    }
    }
    const handeImageChange = (e) => {
        setImage(e.taget.value);
    }

    const handleSubmit = async (e) => {
        e.prevedentDefaut();
    }

    try {
        const response = await  axios.post(`http://127.0.0.1:8000/api/hotel_and_images`,{
            name,
            desc,
            image,
        });

        console.log (response.data);

        //Clear data after successful submition
        setName('');
        setDesc('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
           <table>
            <tr>
                <td>
                    <label htmlFor="name">Tên phòng:</label>
                    <input type="text" id="name" value={name} onChange={handelNameChange} />
                </td>
                <td>
                    <label htmlFor="desc">Mô tả phòng:</label>
                    <input type="text" id="desc" value={desc} onChange={handelDescChange} />
                </td>
                <td>
                    <label htmlFor="name">Hình ảnh phòng:</label>
                    <input type="text" id="image" value={name} onChange={handelImageChange} />
                </td>
            </tr>
           </table>

           <button type="submit">Add Room</button>
        </form>
    )
}


export default addRoom;