import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleClearList = () => {
    setPeople([]);
  };
  const reloadList = () => {
    setPeople(data);
  };
  const deleteFriend = (id) => {
    setPeople(people.filter((friend) => friend.id !== id));
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <ul key={id}>
            <li>{name}</li>
            <button onClick={() => deleteFriend(id)}>Remove</button>
          </ul>
        );
      })}

      {people.length > 0 ? (
        <button onClick={handleClearList}>ClearList</button>
      ) : (
        <button onClick={reloadList}>Reload List</button>
      )}
    </div>
  );
};

export default UseStateArray;
