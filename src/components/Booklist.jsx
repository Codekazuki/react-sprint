import React from "react";
import Book from "./Book";
import dp from "../assets/bird.jfif";
const books = [
  {
    bookName: "Ogboju Ode",
    author: "Jf odunjo",
    image: dp,
    id: 1,
  },
  { id: 2, bookName: "Open haeven", author: "Enoch Adeboye", image: dp },
];

const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <div>
      {books.map((book) => {
        return <Book key={book.id} {...book} getBook={getBook} />;
      })}
    </div>
  );
};

export default Booklist;
