import { Console } from "console";
import fs from "fs";
import path from "path";

export function buildFeedbackPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function extractFeedBack(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  console.log("req.method: ", req.method);
  if (req.method === "POST") {
    console.log(" == POST ==");
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };

    // store that int a database or in a tilte
    const filePath = buildFeedbackPath();
    const data = extractFeedBack(filePath);
    console.log("file DATA: ", data);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();
    const data = extractFeedBack(filePath);
    res.status(200).json({ feedback: data });
  }
}

export default handler;
