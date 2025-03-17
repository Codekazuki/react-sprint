import React from "react";
import Book from "./Book";
import dp from "../assets/bird.jfif";
const firstBook = {
  bookName: "Ogboju Ode",
  author: "Jf odunjo",
  image: dp,
};
const secondBook = {
  bookName: "Open haeven",
  author: "Enoch Adeboye",
  image: dp,
};
const names = ["John", "Peter", "Michael"];
const newName = names.map((name) => <h1>{name}</h1>);
const Booklist = () => {
  return <div>{newName}</div>;
};

export default Booklist;
