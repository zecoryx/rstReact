import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Hisoblagich: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
