import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';
import { events } from '@/lib/constants';

const Home = () => {
  return (
    <section>
      <h1 className='text-center'>
        The Hub for Every Dev <br />
        Event Your Can't Miss
      </h1>
      <p className='text-center mt-5'>
        <span className='text-primary'>Dev2Dev</span> is a platform to Meet,
        greet and connect with each other.
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
