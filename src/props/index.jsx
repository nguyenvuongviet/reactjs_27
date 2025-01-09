import React, { useState } from 'react';
import Avatar from './avatar';
import Message from './message';
import UserCard from './user-card';

export default function Props() {
  const users = [
    {
      id: '1',
      fullName: 'John Doe',
      age: 18,
      srcImage:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
      phone: '1234567890',
      description: 'Lorem ipsum dolor sit amet',
      skills: ['React', 'Vue', 'Angular'],
      info: {
        email: 'johndoe@gmail.com',
        address: 'Japan',
      },
    },
    {
      id: '2',
      fullName: 'Alice',
      age: 20,
      srcImage:
        'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
      phone: '034111902',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['Java', 'Python', 'C++'],
      info: {
        email: 'alice@gmail.com',
        address: 'Viet Nam',
      },
    },
    {
      id: '3',
      fullName: 'Bob',
      age: 30,
      srcImage:
        'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      skills: ['React', 'Vue', 'Angular'],
      info: {
        email: 'bob@gmail.com',
        address: 'Viet Nam',
      },
    },
  ];

  const [message, setMessage] = useState('Hello, BC78');

  const handleChangeMsg = (text) => {
    // console.log('Trigger click message', event);
    setMessage(text);
  };

  return (
    <div>
      <h2 className='mb-10'>Demo Props</h2>
      <div className='gap-2 flex items-center'>
        <Avatar srcImage='https://picsum.photos/200/300' width={80} height={80} />
        <Avatar srcImage='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww' />

        <Avatar srcImage='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww' />
      </div>

      <h2 className='my-4'>List Users</h2>
      <div className='flex items-end gap-4'>
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              srcImage={user.srcImage}
              fullName={user.fullName}
              age={user.age}
              phone={user.phone}
              description={user.description}
              skills={user.skills}
              info={user.info}
              item={user}
              footer={
                <div className='flex items-center justify-between'>
                  <button className='bg-green-500 p-3 rounded-md'>View details</button>
                </div>
              }
            />
          );
        })}
      </div>

      <div className='m-24'>
        <Message
          message={message}
          // onClickChangeMsg={(text) => {
          //   handleChangeMsg(text);
          // }}
          onClickChangeMsg={(text) => {
            setMessage(text);
          }}
        />
      </div>
    </div>
  );
}
