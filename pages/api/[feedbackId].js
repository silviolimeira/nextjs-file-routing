import { buildFeedbackPath, extractFeedBack } from "./feedback";

function handler(req, res) {
  const feedbackId = req.query.feedbackId;
  console.log("FeedbackId: ", feedbackId);
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedBack(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
