import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  function addNote(newNote) {
    setLoading(true);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {loading ? (
        <div class="text-center my-5">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        notes.map((noteItem, index) => {
          return (
            <div>
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            </div>
          );
        })
      )}
      <Footer />
    </div>
  );
}

export default App;
