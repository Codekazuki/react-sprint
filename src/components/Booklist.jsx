import React from "react";
import Book from "./Book";
import dp from "../assets/bird.jfif";
const firstBook = {
  bookName: "Ogboju Ode",
  author: "Jf odunjo",
  image: dp,
};
const secondBook = {};

const Booklist = () => {
  return (
    <div>
      <Book
        image={firstBook.image}
        bookName={firstBook.bookName}
        author={firstBook.author}
      />
      <Book
        image={secondBook.image}
        bookName={secondBook.bookName}
        author={secondBook.author}
      />
    </div>
  );
};

export default Booklist;
