import { useState } from "react";

const guests = ["Alice", "Bob", "Charlie", "Dana", "Eve"];

export default function GuestList() {
  const [list, setList] = useState([]);

  function addGuest() {
    const random = guests[Math.floor(Math.random() * guests.length)];
    setList(prev => [...prev, random]);
  }

  function clearList() {
    setList([]);
  }

  return (
    <div className="guest-list">
      <h3>Guests</h3>
      <button onClick={addGuest}>Add Random Guest</button>
      <button onClick={clearList}>Clear List</button>
      <ul>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
