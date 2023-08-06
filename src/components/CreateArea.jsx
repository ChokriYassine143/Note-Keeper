import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function handlechange(event) {
    const { name, value } = event.target;
    setNote((prevalue) => {
      return { ...prevalue, [name]: value };
    });
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onChange={handlechange}
          value={note.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={handlechange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={() => {
            setNote({ title: "", content: "" });
            return props.onadd(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
