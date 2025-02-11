import { useState, useCallback } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Hisob: {count}</h2>
      <Button onClick={increment} />
      <button onClick={() => setOtherState(!otherState)}>Boshqa holat</button>
    </div>
  );
}

export default Counter;
// increment faqat bir marta yaratiladi (useCallback tufayli).
// Agar otherState o‘zgarsa, faqat Counter qayta chiziladi, lekin Button o‘zgarmaydi!