import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Head from "next/head";

function FilteredEventsPage(props) {
  const router = useRouter();

  const [loadedEvents, setEvents] = useState();

  const filterData = router.query.slug;

  const fetcher = (...args) =>
    fetch(...args)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setEvents(data.content);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });

  //const { error } = useSWR("http://172.21.64.1:8080/events", fetcher);
  const { error } = useSWR("http://localhost:3000/api/dummy-events", fetcher);

  if (!loadedEvents || !filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filterMonth;

  const pageHeadData = (
    <Head>
      <title>{`All Events for ${numMonth}/${numYear}.`}</title>
      <meta
        name="description"
        content={`All Events for ${numMonth}/${numYear}.`}
      />
    </Head>
  );

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.eventDate);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No Events for this Date...</p>;
  }

  return (
    <div>
      {pageHeadData}
      <ResultsTitle date={filteredEvents[0].eventDate} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
