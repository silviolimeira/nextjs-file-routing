export async function getAllEvents() {
  //const response = await fetch("http://localhot:8080/events");
  // WSL
  const response = await fetch("http://172.21.64.1:8080/events");

  const data = await response.json();

  const content = data.content;

  const events = [];
  for (const key in content) {
    events.push({
      id: key.toString(),
      ...content[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id.toString() === id.toString());
}
