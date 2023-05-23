import { useRouter } from "next/router";
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

function FilteredEventsPage(props) {
  //const router = useRouter();
  /*
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filterMonth;
  */
  if (!props || props?.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>
            <h1>Invalid filter. Please adjust your values.</h1>
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  //const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  const filteredEvents = props?.events;

  if (!filteredEvents || filteredEvents?.length === 0) {
    return (
      <>
        <ErrorAlert>
          <div>
            <h1>No events found for chosen filter!</h1>
          </div>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  //const date = new Date(numYear, numMonth - 1);

  const date = new Date(props.date?.year, props.date?.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filterMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      //notFound: true,
      //redirect: {
      //  destination: '/error'
      //}
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}

export default FilteredEventsPage;
