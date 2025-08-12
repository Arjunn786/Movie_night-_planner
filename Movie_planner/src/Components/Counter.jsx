import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => Math.min(c + 1, 20));
  const decrement = () => setCount(c => Math.max(c - 1, 0));

  return (
    <div className="counter">
      <h3>Snacks</h3>
      <button className="counter-btn" onClick={decrement} disabled={count === 0}>−</button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={increment} disabled={count === 20}>+</button>
      {count > 15 && <p>🍿 Snack Overload!</p>}
    </div>
  );
}
