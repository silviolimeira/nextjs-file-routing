import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

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
    return (
      <p>
        <h1>Invalid filter. Please adjust your values.</h1>
      </p>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <p>
        <h1>No events found for chosen filter!</h1>
      </p>
    );
  }

  return (
    <div>
      <h1>Filtered Events</h1>
    </div>
  );
}

export default FilteredEventsPage;
