import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './widget.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) => {
    const [userCount, setUserCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [earningTotal, setEarningTotal] = useState(0);

    useEffect(() => {
        if (type === 'users') {
            fetchUserCount();
        } else if (type === 'orders') {
            fetchOrderCount();
        }
    }, [type]);

    const fetchUserCount = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users');
            const users = response.data;
            setUserCount(users.length);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchOrderCount = async () => {
        try {
            const bookingsResponse = await axios.get('http://127.0.0.1:8000/api/bookings');
            const roomsResponse = await axios.get('http://127.0.0.1:8000/api/rooms');
            const bookings = bookingsResponse.data;
            const rooms = roomsResponse.data;

            const roomPrices = {};
            rooms.forEach(room => {
                roomPrices[room.id] = room.price;
            });

            const total = bookings.reduce((acc, booking) => {
                const roomPrice = roomPrices[booking.roomId] || 0;
                return acc + roomPrice;
            }, 0);

            setOrderCount(bookings.length);
            setEarningTotal(total);
        } catch (error) {
            console.log(error);
        }
    };

    let data;
    let amount;

    switch (type) {
        case 'users':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See All Users',
                icon: (
                    <PersonOutlinedIcon
                        className='icon'
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                            height: '30px',
                            width: '30px',
                        }}
                    />
                ),
            };
            break;
        case 'orders':
            data = {
                title: 'BOOKINGS',
                isMoney: false,
                link: 'See All Bookings',
                icon: (
                    <ShoppingCartOutlinedIcon
                        className='icon'
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 65, 32, 0.2)',
                            height: '30px',
                            width: '30px',
                        }}
                    />
                ),
            };
            break;
        case 'earnings':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View Earnings',
                icon: (
                    <MonetizationOnOutlinedIcon
                        className='icon'
                        style={{
                            color: 'green',
                            backgroundColor: 'rgba(0, 128, 0, 0.2)',
                            height: '30px',
                            width: '30px',
                        }}
                    />
                ),
            };
            amount = earningTotal;
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See Details',
                icon: (
                    <AccountBalanceWalletOutlinedIcon
                        className='icon'
                        style={{
                            color: 'purple',
                            backgroundColor: 'rgba(128, 0, 128, 0.2)',
                            height: '30px',
                            width: '30px',
                        }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    const counter = type === 'users'
        ? userCount
        : type === 'orders'
            ? orderCount
            : type === 'earnings'
                ? earningTotal
                : '';

    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>
                    {data.isMoney && '$'} {counter}
                </span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardArrowUpIcon />
                    {/* Replace diff with the actual difference value */}
                    {/* {diff}% */}
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
