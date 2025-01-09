import React from 'react';

export default function UserCard({
  srcImage,
  fullName,
  age,
  phone,
  description,
  skills = [],
  info = {},
  footer,
  item,
}) {
  // const { srcImage, fullName, age, phone } = props
  // Object: object and array. {...a , b}

  // const user = { age : "123" , name : "Alice" } // xxx
  // const user1 = {...user , phone: "123123"} // xxy

  return (
    <div className='w-60 border border-gray-400 rounded-lg p-4'>
      <div className='flex items-center justify-center mb-8'>
        <img className='w-40 h-40 rounded-full' src={srcImage} alt='logo' />
      </div>
      <div className='space-y-4'>
        <p>FullName: {fullName}</p>
        <p>Age: {age}</p>
        <p className='line-clamp-2	min-h-12'>{description}</p>
        {phone ? <p>Phone: {phone}</p> : ''}
        <p>{info.email}</p>
        <p>{info.address}</p>
      </div>
      <div>
        <h3>Skills</h3>
        <ul className='list-disc list-inside'>
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
      {footer}
    </div>
  );
}
