import { useState } from "react";

const AddNoteForm = () => {
  const [note, setNote] = useState({
    commend: "",
    rating: 0,
  });


  const handleChange = (e) => {
    if (note.rating < 1) {
      e.preventDefault();
      return;
    }
    setNote({ ...note, [e.target.name]: e.target.value });
    adjustTextareaHeight(e.target);
  };

  const handleRatingChange = (newRating) => {
    setNote({ ...note, rating: newRating });
  };

  const adjustTextareaHeight = (element) => {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
  };


  return (
    <>
      <form>
        <div className="star">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{ cursor: "pointer" }}
              onClick={() => handleRatingChange(star)}
            >
              {star <= note.rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <div className="commend">
          <textarea
            name="commend"
            className="multiline-input"
            id="multiline-input"
            value={note.commend}
            onChange={handleChange}
            placeholder="Your opinion"
            maxLength="255"
            required
          />
          <button
            type="submit"
            disabled={note.rating < 1 || note.commend.trim() === ""}
          >
            Add Note
          </button>
        </div>
      </form>

      <h2>Notes</h2>
    </>
  );
};

export default AddNoteForm;