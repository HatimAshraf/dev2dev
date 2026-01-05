'use client';

import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';

const Navbar = () => {
  const handleLogoClick = () => {
    posthog.capture('logo_clicked', {
      nav_location: 'header',
    });
  };

  const handleHomeClick = () => {
    posthog.capture('nav_home_clicked', {
      nav_location: 'header',
    });
  };

  const handleEventsClick = () => {
    posthog.capture('nav_events_clicked', {
      nav_location: 'header',
    });
  };

  const handleCreateEventClick = () => {
    posthog.capture('nav_create_event_clicked', {
      nav_location: 'header',
    });
  };

  return (
    <header>
      <nav className='flex flex-row justify-between mx-auto container sm:px-10 px-5 py-4;'>
        <Link href='/' className='logo' onClick={handleLogoClick}>
          <Image src='/icons/logo.png' alt='logo' width={24} height={24} />
          <p>Dev2Dev</p>
        </Link>
        <ul>
          <Link href='/' onClick={handleHomeClick}>Home</Link>
          <Link href='/events' onClick={handleEventsClick}>Events</Link>
          <Link href='/create-event' onClick={handleCreateEventClick}>Create Events</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
