import React, { useMemo, useState } from "react";

export default function UseMemoCount() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const squaredNumber = useMemo(() => {
    console.log("Hisoblanmoqda...");
    return count ** 2;
  }, [count]);
  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setDark(!dark)}>Tema o'zgartirish</button>
      <h2>Kvadrat: {squaredNumber}</h2>
    </div>
  );
}
// Kvadratni hisoblash (count ** 2) faqat count o‘zgarganda amalga oshiriladi.
// Agar useMemo ishlatilmasa, har safar dark o‘zgarganda ham hisob-kitob bajariladi, bu esa keraksiz resurs sarfiga olib keladi.
