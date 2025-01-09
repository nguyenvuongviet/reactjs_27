import React from 'react';

export default function Message({ message, onClickChangeMsg }) {
  const textMsg = 'Đây là message truyền từ component con ra component cha';
  return (
    <div>
      <p>Đây là message được truyền từ component cha: {message}</p>
      <button
        onClick={() => {
          onClickChangeMsg(textMsg);
        }}
        className='p-3 rounded-md bg-green-500 text-white'
      >
        Thay đổi nội dung message
      </button>
    </div>
  );
}
