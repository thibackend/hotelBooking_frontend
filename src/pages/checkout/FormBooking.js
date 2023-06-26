import React, { useState, useEffect } from 'react';
import './boking.css';
import { Navigate, useNavigate } from 'react-router-dom';

const FormBooking = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState('');
  const [roomPrice, setRoomPrice] = useState(1000);
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [cleaningFee, setCleaningFee] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [numberOfNights, setNumberOfNights] = useState(0);
  const [invalidDate, setInvalidDate] = useState(false);
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    calculatePrice();
    const currentDate = new Date().toISOString().split('T')[0];
    if (checkInDate < currentDate) {
      setInvalidDate(true);
      return;
    }
    setInvalidDate(false);
  }, [checkInDate, checkOutDate, guestCount]);

  const calculatePrice = () => {
    const nights = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 3600 * 24));
    setNumberOfNights(nights);

    const basePrice = roomPrice * nights;
    const cleaningFeeValue = 50;
    const serviceFeeValue = 20;

    // Tính giá phòng dựa trên số lượng khách
    const totalPriceValue = basePrice * guestCount + cleaningFeeValue + serviceFeeValue;
    setCleaningFee(cleaningFeeValue);
    setServiceFee(serviceFeeValue);
    setTotalPrice(totalPriceValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (totalPrice <= 0) {
      alert('Giá trị không hợp lệ');
      return;
    }

    let datacheckout = {
      checkInDate,
      checkOutDate,
      numberOfNights,
      roomPrice,
      guestCount,
      totalPrice,
      serviceFee,
      cleaningFee,
    };
    localStorage.setItem('datacheckout', JSON.stringify(datacheckout));
    navigate('/confirm');
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='booking-form'>
        <div className='form-group'>
          <label htmlFor='checkInDate'>Ngày đặt:</label>
          <input
            type='date'
            className='form-control'
            id='checkInDate'
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            min={currentDate}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='checkOutDate'>Ngày trả:</label>
          <input
            type='date'
            className='form-control'
            id='checkOutDate'
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            min={checkInDate}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='guestCount'>Số khách:</label>
          <input
            type='number'
            className='form-control'
            id='guestCount'
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
            min='1'
            max='10'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Đặt phòng
        </button>

        {numberOfNights > 0 && (
          <p className='tex-name'>
            Giá phòng ({numberOfNights} đêm): {roomPrice * numberOfNights * guestCount} VNĐ
          </p>
        )}
        {numberOfNights > 0 && <p className='tex-name'>Số ngày đặt: {numberOfNights} ngày</p>}
        <p className='tex-name'>Phí vệ sinh: {cleaningFee} VNĐ</p>
        <p className='tex-name'>Phí dịch vụ: {serviceFee} VNĐ</p>
        <hr></hr>
        {totalPrice >= 0 && <p className='tex-name tex-name2'>Tổng giá: {totalPrice} VNĐ</p>}
      </form>
    </div>
  );
};

export default FormBooking;
