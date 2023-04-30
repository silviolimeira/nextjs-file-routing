import Link from "next/link";

import classes from "./event-item.module.css";

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
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formatAddress}</address>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
