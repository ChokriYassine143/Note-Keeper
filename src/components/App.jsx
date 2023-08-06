import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Cookies from "js-cookie";
function App() {
  const [notes, setnotes] = useState([]);
  useEffect(() => {
    const savedNotes = Cookies.get("savedNotes");
    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);
      setnotes(parsedNotes);
    }
  }, []);

  function addnote(note) {
    const updatedNotes = [...notes, note];

    Cookies.set("savedNotes", JSON.stringify(updatedNotes), {
      expires: 365 * 10
    });
    setnotes(updatedNotes);
  }

  function deleteitem(id) {
    const updatednotes = notes.filter((ele, index) => index !== id);
    setnotes(updatednotes);
    Cookies.set("savedNotes", JSON.stringify(updatednotes), {
      expires: 365 * 10
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {notes.map((ele, index) => {
        return (
          <Note
            key={index}
            id={index}
            ondelete={deleteitem}
            title={ele.title}
            content={ele.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
