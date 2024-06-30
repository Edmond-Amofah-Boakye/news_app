import Image from 'next/image';
import React from 'react';

const comments = [
    {
      image: 'https://via.placeholder.com/48',
      name: 'John Doe',
      date: '2024-06-09',
      message: 'This is a sample comment.',
    },
    {
      image: 'https://via.placeholder.com/48',
      name: 'Jane Smith',
      date: '2024-06-08',
      message: 'This is another sample comment.',
    },
  ];

const CommentList = () => {
  return (
    <div className="max-w-2xl my-8">
      {comments.map((comment, index) => (
        <div key={index} className="mb-6 border-b pb-4">
          <div className="flex items-start">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKUPmZPihoODvOLEaynPON5UcTl9tEX34SQ&s"
            alt="user image"
            width={50}
            height={50}
            unoptimized
            className="rounded-[25px]"
          />
            <div className="flex-grow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{comment.name}</h3>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="mt-2 text-gray-700">{comment.message}</p>
              <button className="mt-2 text-blue-500 hover:underline">
                Reply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
