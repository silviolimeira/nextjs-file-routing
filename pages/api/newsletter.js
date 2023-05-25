function handler(req, res) {
  if (req.method === "POST") {
    console.log("POST: ", req.body.email);
    const user = JSON.parse(req.body);
    const userEmail = user.email;
    console.log("userEmail: ", userEmail);
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    console.log(userEmail);
    res.status(201).json({ message: "Singed up!" });
  }
}

export default handler;
