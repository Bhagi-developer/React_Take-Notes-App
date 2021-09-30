import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import Note from "./Note";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  // const spinner = (
  //   <div class="text-center">
  //     <div class="spinner-border" role="status">
  //       <span class="sr-only">Loading...</span>
  //     </div>
  //   </div>
  // );

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title == "" || note.content == "") return;

    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Content"
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <BookmarkBorderIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
