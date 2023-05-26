import { getFilteredEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";
import ContasPage from "./contas";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that your to envolve..."
        />
      </Head>
      <ContasPage />
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
