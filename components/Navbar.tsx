import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <nav className='flex flex-row justify-between mx-auto container sm:px-10 px-5 py-4;'>
        <Link href='/' className='logo'>
          <Image src='/icons/logo.png' alt='logo' width={24} height={24} />
          <p>Dev2Dev</p>
        </Link>
        <ul>
          <Link href='/'>Home</Link>
          <Link href='/events'>Events</Link>
          <Link href='/create-event'>Create Events</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
