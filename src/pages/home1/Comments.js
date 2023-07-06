import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment"; // Thêm import cho thư viện moment
import "../../css/comment.css";
import tokenService from "../../services/token.service";

export default function Comments({ roomId }) {
  const [comments, setComments] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [userData, setUserData] = useState(tokenService.getToken());
  const postComment = async () => {
    await axios
      .post(`http://127.0.0.1:8000/api/comments`, {
        content: commentInput,
        room_id: roomId,
        user_id: userData.user_id,
      })
      .then((response) => {
        setComments(response.data.original);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentInput && roomId && userData.user_id) {
      postComment();
    }
  };

  const handleChangeComment = (event) => {
    setCommentInput(event.target.value);
  };
  // Hàm định dạng thời gian hiển thị
  const formatTime = (time) => {
    const now = moment(); // Thời gian hiện tại
    const commentTime = moment(time); // Thời gian của bình luận
    const diffHours = now.diff(commentTime, "hours"); // Số giờ chênh lệch
    if (diffHours < 8) {
      return commentTime.fromNow(); // Hiển thị "x giờ trước"
    } else {
      return commentTime.format("DD/MM/YYYY [lúc] HH:mm");
    }
  };
  const fetchComment = async () => {
    await axios
      .get(`http://127.0.0.1:8000/api/comments/${roomId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (!comments) {
      fetchComment();
    }
  }, [comments, commentInput]);

  return (
    <div className="comments-container">
      <input
        className="comment-input"
        placeholder="Bình luận..."
        onChange={handleChangeComment}
      />
      <button className="comment-submit" type="submit" onClick={handleSubmit}>
        Gửi
      </button>
      <div className="comment-list w-25">
        <h5 className="comment-header">Bình luận</h5>
        {comments && comments.length > 0 ? (
          comments.map((item, index) => (
            <div key={index} className="comment-item">
              <div className="comment-user d-flex justify-content-start align-items-baseline h-6">
                <img
                  className="comment-avatar "
                  src={item.image}
                  alt="Avatar"
                />
                <h6 className="comment-username mx-1">{item.name}</h6>
                <p className="comment-date">{formatTime(item.created_at)}</p>
              </div>
              <div className="contents mx-0 ">{item.content}</div>
            </div>
          ))
        ) : (
          <h6>there is have no comment!</h6>
        )}
      </div>
    </div>
  );
}
