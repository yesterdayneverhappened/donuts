import React, { useState, useEffect } from 'react';

const ReviewForm = ({ onSendReview }) => {
  const [reviewText, setReviewText] = useState('');
  const [userName, setUserName] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedReviewText = localStorage.getItem('reviewText');
    const savedUserName = localStorage.getItem('userName');
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    if (savedReviewText) {
      setReviewText(savedReviewText);
    }

    if (savedUserName) {
      setUserName(savedUserName);
    }

    if (savedComments) {
      setComments(savedComments);
    }
  }, []);

  const handleInputChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSendReview = () => {
    // Добавляем новый комментарий в массив
    const newComment = { userName, reviewText };
    const newComments = [...comments, newComment];
    
    // Вызываем функцию onSendReview, переданную через пропсы извне
    onSendReview(newComment);

    // Обновляем состояние комментариев
    setComments(newComments);

    // Очищаем текст отзыва и сохраняем введенный текст и имя пользователя в локальное хранилище
    setReviewText('');
    setUserName('');
    localStorage.setItem('reviewText', '');
    localStorage.setItem('userName', '');

    // Сохраняем массив комментариев в локальное хранилище
    localStorage.setItem('comments', JSON.stringify(newComments));
  };

  return (
    <div >
      <label>
        <p style={{color: 'white', fontSize: '30px'}}>Your Name:</p>
        <input className='input_name' type="text" value={userName} onChange={handleUserNameChange} />
        <p style={{color: 'white', fontSize: '30px'}}>Your Review:</p>
        <textarea className='input' value={reviewText} onChange={handleInputChange} />
        <button className='send' onClick={handleSendReview}>Send Review</button>
      </label>
      
     
      <div className='comments'>
        <h2 style={{color: 'white', fontSize: '30px'}}>Comments:</h2>
        {comments.map((comment, index) => (
          <p className='comm' key={index}>{comment.userName}: {comment.reviewText}</p>
        ))}
      </div>
    </div>
  );
};

export default ReviewForm;
