import React from 'react';

export default function Avatar(props) {
  console.log('🔥 ~ Avatar ~ props:', props);
  const { width = 120, height = 120, srcImage } = props;
  return (
    <div style={{ width: width, height: height }} className={`rounded-full overflow-hidden`}>
      <img className='w-full  h-full object-cover' src={srcImage} alt='Avatar' />
    </div>
  );
}
