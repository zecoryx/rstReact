//! import { useRef } from "react";
// export default function App() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Ism kiriting..." />
//       <button onClick={focusInput}>Fokus berish</button>
//     </div>
//   );
// }
//* inputRef.current orqali <input> elementiga bevosita murojaat qilinmoqda.
//* focusInput funksiyasi tugma bosilganda inputRef.current.focus() ni ishga tushiradi.


//! 2. Qiymatni saqlash (render bo‘lmasdan)
// import { useRef, useState } from "react";

// export default function App() {
//   const countRef = useRef(0);
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     countRef.current += 1;
//     console.log("Ref qiymati:", countRef.current);
//   };

//   return (
//     <div>
//       <p>State qiymati: {count}</p>
//       <p>Ref qiymati: {countRef.current}</p>
//       <button onClick={() => setCount(count + 1)}>State oshirish</button>
//       <button onClick={increment}>Ref oshirish</button>
//     </div>
//   );
// }
//* countRef.current o‘zgarsa ham, komponent qayta render bo‘lmaydi.
//* useState bilan ishlaganda har safar render bo‘ladi, lekin useRef bilan render sodir bo‘lmaydi.


//! Oldingi qiymatni eslab qolish
// import { useState, useEffect, useRef } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const prevCountRef = useRef(0);

//   useEffect(() => {
//     prevCountRef.current = count;
//   }, [count]);

//   return (
//     <div>
//       <p>Joriy qiymat: {count}</p>
//       <p>Oldingi qiymat: {prevCountRef.current}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// }
//* prevCountRef.current orqali oldingi qiymatni eslab qolamiz.
//* useEffect ichida prevCountRef.current = count qilib, count o‘zgarishlarini saqlab qolamiz.

//! Interval va vaqt funksiyalarini boshqarish
// import { useState, useEffect, useRef } from "react";

// export default function Timer() {
//   const [count, setCount] = useState(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div>
//       <p>Vaqt: {count}</p>
//       <button onClick={() => clearInterval(intervalRef.current)}>To‘xtatish</button>
//     </div>
//   );
// }
//* intervalRef.current setInterval`ni saqlaydi va keyin uni to‘xtatish mumkin.
//* useEffect ichida interval boshlanadi va return orqali clearInterval bajariladi.