'use client';

import Image from 'next/image';

const ExploreBtn = () => {
  const handleClick = () => {
    console.log('button clicked');
  };
  return (
    <button
      type='button'
      id='explore-btn'
      className='mt-7 mx-auto cursor-pointer'
      onClick={handleClick}
    >
      <a href='#event'>
        Explore Events
        <Image
          src='/icons/arrow-down.svg'
          alt='arrow-down'
          width={24}
          height={24}
        />
      </a>
    </button>
  );
};

export default ExploreBtn;
