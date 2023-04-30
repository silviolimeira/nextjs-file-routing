import Link from "next/link";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  const humanReadableDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    monty: "long",
    year: "numeric",
  });
  const formatAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formatAddress}</address>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
