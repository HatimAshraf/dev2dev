import Image from 'next/image';
import Link from 'next/link';

interface EventCardsProps {
  title: string;
  image: string;
}

const EventCard = ({ title, image }: EventCardsProps) => {
  return (
    <Link href={'/events'} className='flex flex-col gap-3'>
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className='h-[300px] w-full rounded-lg object-cover'
      />
      <p className='text-light-200 text-sm text-[20px] font-semibold line-clamp-1'>
        {title}
      </p>
    </Link>
  );
};

export default EventCard;
