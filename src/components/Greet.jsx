import React from "react";

const Image =
  "https://media.istockphoto.com/id/2161378701/photo/chimerella-mariaelenae-glass-frog-hanging-on-a-flower-stem.webp?a=1&b=1&s=612x612&w=0&k=20&c=A5HmQf_GMWC057V--B_5IBTaGqOZOIInFKAEY1993eQ=";
const Title = "eat that frog";
const Book = ({ job, type }) => {
  return (
    <div>
      <h1>{Title}</h1>
      <img src={Image} alt={Title} />
      <p>{job}</p>
      <h6>{type}</h6>
    </div>
  );
};
const Greet = () => {
  return (
    <div>
      <Book job='Success' type='animal' />
      <Book />
    </div>
  );
};

export default Greet;
