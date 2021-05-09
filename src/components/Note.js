import React from "react";

const Note = ({ content, date }) => {
  return (
    <li>
      <p>{content}</p>
      <p>{date}</p>
    </li>
  );
};

export default Note;
