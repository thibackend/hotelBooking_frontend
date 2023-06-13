import React, { useEffect, useState } from 'react';

const ConfirmationPage = () => {
  const [datacheckout, setDataCheckout] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const [email, setEmail] = useState('');
  const [momoNumber, setMomoNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState();
  const [editing, setEditing] = useState(false);
  const [newStartDate, setNewStartDate] = useState(startDate);
  const [newEndDate, setNewEndDate] = useState(endDate);
  const [room_price, setroom_price] = useState();
  const [numberOfNights, setNumberOfNights] = useState();
  const [ serviceFee, setServiceFee,] = useState();
  const [totalPrice , settotalPrice,] = useState();
  const [ cleaningFee, setcleaningFee,] = useState();

  useEffect(() => {
    const datacheck = JSON.parse(localStorage.getItem('datacheckout'));
    setDataCheckout(datacheck);
    setStartDate(datacheck.checkInDate);
    setEndDate(datacheck.checkOutDate);
    setGuests(datacheck.numberOfGuests);
    setroom_price(datacheck.room_price)
    setNumberOfNights(datacheck.numberOfNights);
    setServiceFee(datacheck.serviceFee);
    settotalPrice(datacheck.totalPrice );
    setcleaningFee(datacheck.cleaningFee);
    console.log(datacheck);

  }, []);

  const handleEditDate = () => {
    setEditing(true);
  };

  const handleSaveDate = () => {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
    setEditing(false);
  };

  const handleEditGuests = () => {
    const editedGuests = prompt('Nhập số lượng khách mới:');
    setGuests(editedGuests);
  };

  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;
    setPaymentMethod(selectedMethod);

    if (selectedMethod === 'momo') {
      setMomoNumber('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();

    // Perform payment processing here

    console.log('Email:', email);
    console.log('Payment method:', paymentMethod);
    console.log('MoMo number:', momoNumber);
    console.log('Card number:', cardNumber);
    console.log('Expiry date:', expiryDate);
    console.log('CVV:', cvv);
  };

  return (
    <div className="container">
      <div className="main my">
        <h1>Xác nhận và thanh toán</h1>
        <div className="booking-info">
          <h2>Chuyến đi của bạn</h2>
          <h3>Ngày</h3>
          {editing ? (
            <div>
              <label htmlFor="startDate">Ngày đặt:</label>
              <input
                type="date"
                id="startDate"
                value={newStartDate}
                onChange={(e) => setNewStartDate(e.target.value)}
              />
              <label htmlFor="endDate">Ngày trả:</label>
              <input
                type="date"
                id="endDate"
                value={newEndDate}
                onChange={(e) => setNewEndDate(e.target.value)}
              />
              <button className="edit-button" onClick={handleSaveDate}>
                Lưu
              </button>
            </div>
          ) : (
            <div>
              <span>
                Ngày {startDate} - Ngày {endDate}
              </span>
              <button className="edit-button" onClick={handleEditDate}>
                Chỉnh sửa
              </button>
            </div>
          )}
        </div>
        <div className="guest-info">
          <h3>Khách</h3>
          <span>{guests}</span>
          <button className="edit-button" onClick={handleEditGuests}>
            Chỉnh sửa
          </button>
          <hr />
        </div>
        <form onSubmit={handlePaymentSubmit}>
          <div className="payment-methods">
            <h2>Chọn phương thức thanh toán</h2>
            <select value={paymentMethod} onChange={handlePaymentMethodChange}>
              <option value="">-- Chọn phương thức --</option>
              <option value="visa">Thẻ Visa</option>
              <option value="mastercard">Thẻ Mastercard</option>
              <option value="amex">Thẻ American Express</option>
              <option value="paypal">PayPal</option>
              <option value="momo">MoMo</option>
            </select>
            {paymentMethod && (
              <>
                {paymentMethod === 'momo' && (
                  <div className="momo-number">
                    <label htmlFor="momo-number">Số điện thoại MoMo</label>
                    <input
                      type="text"
                      id="momo-number"
                      value={momoNumber}
                      onChange={(event) => setMomoNumber(event.target.value)}
                    />
                  </div>
                )}
                {paymentMethod !== 'momo' && (
                  <>
                    <div className="card-number">
                      <label htmlFor="card-number">Số thẻ</label>
                      <input
                        type="text"
                        id="card-number"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                    </div>
                    <div className="expiry-date">
                      <label htmlFor="expiry-date">Ngày hết hạn</label>
                      <input
                        type="text"
                        id="expiry-date"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                      />
                    </div>
                    <div className="cvv">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={handleCvvChange}
                      />
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button
            type="submit"
            disabled={
              !paymentMethod ||
              (paymentMethod === 'momo' && !momoNumber) ||
              (paymentMethod !== 'momo' && (!cardNumber || !expiryDate || !cvv))
            }
          >
            Xác nhận thanh toán
          </button>
        </form>
      </div>
      <div className="container5">
      <div className="room-details">
          <img
            className="img-room"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-637524289868274312/original/34fad23e-af7b-4baa-8af2-281b095ae76c.jpeg?aki_policy=large"
            alt="Room"
          />

          <div className="rating">
            <h3 className="room_name">Căn phòng quý tộc vào Torino lịch sử</h3>
            <p>Xếp hạng 4,87/5; 157 đánh giá</p>
          </div>
        </div>
        <hr />
        <div className="price-details">
          <h2>Chi tiết giá</h2>
          <div className="price-info">
            <span className="tex-namerom">Giá Phòng ({numberOfNights} ngày):</span>
            <span className="tex_prect"> {room_price*numberOfNights}</span>
          </div>
          <div className="additional-fees">
            <span className="tex-namerom">Phí vệ sinh</span>
            <span className="tex_prect">{cleaningFee}</span>
            <span className="tex-namerom">Phí dịch vụ </span>
            <span className="tex_prect">{serviceFee}</span>
            
          </div>
          <div className="total">
            <span className="tex-namerom">Tổng </span>
            <span className="tex_prect">{totalPrice
}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
