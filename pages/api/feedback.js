import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store that int a database or in a tilte
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.writeFileSync(filePath);
    const data = JSON.parse(fileData);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    res.status(200).json({
      message: "This works",
    });
  }
}

export default handler;
