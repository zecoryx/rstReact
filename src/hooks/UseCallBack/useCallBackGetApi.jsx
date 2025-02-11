import { useState, useEffect, useCallback } from "react";

function useCallBackGetApi() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  const fetchData = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count + 1}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [count]); // Faqat count o‘zgarganda funksiya qayta yaratiladi

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h2>Ma’lumot: {data?.title}</h2>
      <button onClick={() => setCount(count + 1)}>Yangi ma’lumot</button>
    </div>
  );
}

export default useCallBackGetApi;

// fetchData faqat count o‘zgarganda qayta yaratiladi.
// useEffect har doim bir xil funksiya bilan ishlaydi.