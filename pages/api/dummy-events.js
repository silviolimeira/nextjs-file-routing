function handler(req, res) {
  const DUMMY_EVENTS = {
    content: [
      {
        id: 1,
        title: "Programming for everyone",
        description:
          "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
        location: "Somestreet 25, 12345 San Somewhereo",
        eventDate: "2021-05-12",
        image: "images/coding-event.jpg",
        isFeatured: false,
      },
      {
        id: 2,
        title: "Networking for introverts",
        description:
          "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: "New Wall Street 5, 98765 New Work",
        eventDate: "2021-05-30",
        image: "images/introvert-event.jpg",
        isFeatured: true,
      },
      {
        id: 3,
        title: "Networking for extroverts",
        description:
          "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
        location: "My Street 12, 10115 Broke City",
        eventDate: "2022-04-10",
        image: "images/extrovert-event.jpg",
        isFeatured: true,
      },
    ],
  };

  res.status(200).json(DUMMY_EVENTS);
}

export default handler;
