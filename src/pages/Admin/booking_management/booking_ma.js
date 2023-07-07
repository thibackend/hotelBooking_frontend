import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../loading';

function Booking_mang() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/bookings')
            .then(res => {
                console.log(res);
                setBookings(res.data);
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
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Stt</th>
                        <th>User ID</th>
                        <th>Room ID</th>
                        <th>Booking Date</th>
                        <th>Check-in Date</th>
                        <th>Check-out Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.user_id}</td>
                            <td>{booking.room_id}</td>
                            <td>{booking.booking_date}</td>
                            <td>{booking.checkin_date}</td>
                            <td>{booking.checkout_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Booking_mang;
