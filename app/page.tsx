import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';

const Home = () => {
  const events = [
    {
      image: '/images/event1.png',
      title: 'Event1',
    },
    {
      image: '/images/event2.png',
      title: 'Event2',
    },
    {
      image: '/images/event3.png',
      title: 'Event3',
    },
    {
      image: '/images/event4.png',
      title: 'Event4',
    },
    {
      image: '/images/event5.png',
      title: 'Event5',
    },
    {
      image: '/images/event6.png',
      title: 'Event6',
    },
  ];
  return (
    <section>
      <h1 className='text-center'>
        The Hub for Every Dev <br />
        Event Your Can't Miss
      </h1>
      <p className='text-center mt-5'>
        <span className='text-primary'>Dev2Dev</span> is a platform to learn,
        grow and connect with each other.
      </p>
      <ExploreBtn />
      <div className='mt-20 space-y-7'>
        <h3>Featured Events</h3>
        <ul className='events'>
          {events.map((item) => (
            <li key={item.title}>
              <EventCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
