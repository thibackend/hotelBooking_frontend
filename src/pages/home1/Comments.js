import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [roomId, setRoomId] = useState('');
   

    useEffect(() => {
        // Lấy danh sách bình luận cho phòng hiện tại
        axios.get(`http://127.0.0.1:8000/api/comments/${1}`)
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [roomId]);

    const handleChangeComment = (event) => {
        setCommentInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Gửi bình luận cho phòng hiện tại
        axios.post(`http://127.0.0.1:8000/api/comments/`, { content: commentInput, room_id :"1", user_id: '2'})
            .then(response => {
                setComments([...comments, response.data]);
                setCommentInput('');
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSelectRoom = (event) => {
        setRoomId(event.target.value);
    }

    return (
        <div>
           
            <input
                placeholder='Bình luận...'
                value={commentInput}
                onChange={handleChangeComment}
            />
            <button type='submit' onClick={handleSubmit}>Gửi</button>
            <div>
                <p>Bình luận</p>
                {comments.map(item => (
                    <p key={item.id}>{item.content}</p>
                ))}
            </div>
        </div>
    );
}