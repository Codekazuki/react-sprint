import React from "react";
import Book from "./Book";

const Booklist = () => {
  return (
    <div>
      <Book
        image='https://media.istockphoto.com/id/2161378701/photo/chimerella-mariaelenae-glass-frog-hanging-on-a-flower-stem.webp?a=1&b=1&s=612x612&w=0&k=20&c=A5HmQf_GMWC057V--B_5IBTaGqOZOIInFKAEY1993eQ='
        bookName='Things fall apart'
        author='chinau acehbe'
      />
      <Book
        image='https://media.istockphoto.com/id/2161378701/photo/chimerella-mariaelenae-glass-frog-hanging-on-a-flower-stem.webp?a=1&b=1&s=612x612&w=0&k=20&c=A5HmQf_GMWC057V--B_5IBTaGqOZOIInFKAEY1993eQ='
        bookName='Open Heavens'
        author='Pastor Adejare Adeboye'
      />
    </div>
  );
};

export default Booklist;
