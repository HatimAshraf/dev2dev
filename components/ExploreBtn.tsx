'use client';

import Image from 'next/image';
import posthog from 'posthog-js';

const ExploreBtn = () => {
  const handleClick = () => {
    console.log('button clicked');

    // Capture PostHog event for explore button click
    posthog.capture('explore_events_clicked', {
      button_location: 'homepage_hero',
    });
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
