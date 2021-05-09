import React from "react";

const Note = ({ content, date, importance, toggleImportance }) => {
  const label = importance ? "make not important" : "make important";
  return (
    <li>
      <p>{content}</p>
      <p>{date}</p>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
