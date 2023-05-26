import { useRef } from "react";

function NewComment() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentTextAreaRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentTextAreaRef.current.value;

    const comment = {
      email: enteredEmail,
      name: enteredName,
      enteredComment: enteredComment,
    };

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@")
    ) {
      setIsInvalid(true);
    }

    props.onAddComment(comment);

    console.log("Comment: ", comment);
  }

  return (
    <section>
      <h2>New Comment</h2>
      <form onSubmit={sendCommentHandler}>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              aria-label="Your email"
              ref={emailInputRef}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              placeholder="Your name"
              aria-label="Your name"
              ref={nameInputRef}
            />
          </div>
          <div>
            <label htmlFor="comment">Comment</label>
            <textarea
              name="comment"
              id="comment"
              cols="40"
              rows="5"
              placeholder="Your comment"
              aria-label="Your comment"
              ref={commentTextAreaRef}
            />
          </div>
          <div>
            <button>Send New Comment</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default NewComment;
