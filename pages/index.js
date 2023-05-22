import { getFilteredEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage(props) {
  console.log("Home Page");
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  console.log("async function getStaticProps()");
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
}

export default HomePage;
