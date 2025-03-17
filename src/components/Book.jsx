import React from "react";

const Book = ({ bookName, author, image }) => {
  return (
    <div
      style={{
        backgroundColor: "green",
        margin: "1rem",
        maxWidth: "50%",
        padding: "2rem",
      }}
    >
      <h2>Book sample</h2>
      <img
        style={{ width: "96px" }}
        src={image || "image not provided"}
        alt={bookName ? bookName : "no book name"}
      />
      <h2>{bookName || "Unknown name"}</h2>
      <h4>{author}</h4>
    </div>
  );
};

export default Book;
