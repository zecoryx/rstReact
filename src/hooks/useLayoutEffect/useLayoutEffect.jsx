//! 1. DOM o‘lchamlarini olish
// import { useLayoutEffect, useRef, useState } from "react";

// function Example() {
//   const divRef = useRef(null);
//   const [width, setWidth] = useState(0);

//   useLayoutEffect(() => {
//     setWidth(divRef.current.getBoundingClientRect().width);
//   }, []);

//   return (
//     <div ref={divRef} style={{ width: "50%", padding: "20px", background: "lightblue" }}>
//       <p>Element eni: {width}px</p>
//     </div>
//   );
// }

// export default Example;

// useLayoutEffect elementning eni (width) ekranga chizilishidan oldin olinadi.
// Agar useEffect ishlatilganida, UI yuklanganidan keyin o‘lchov olinardi.


//! 2. Fokusni inputga o‘rnatish
// import { useLayoutEffect, useRef } from "react";

// function AutoFocusInput() {
//   const inputRef = useRef(null);

//   useLayoutEffect(() => {
//     inputRef.current.focus(); // UI ko‘rinishidan oldin fokus beriladi
//   }, []);

//   return <input ref={inputRef} type="text" placeholder="Ismingiz..." />;
// }

// export default AutoFocusInput;
// useLayoutEffect input sahifaga yuklanishidan oldin fokus beradi.
// useEffect ishlatilganida, foydalanuvchi bir lahzaga fokus yo‘qligini ko‘rishi mumkin edi.


//! 3. Animatsiyani bloklash
// import { useLayoutEffect, useState } from "react";

// function AnimationBlocker() {
//   const [position, setPosition] = useState(0);

//   useLayoutEffect(() => {
//     if (position > 100) {
//       setPosition(100); // Limit o‘rnatiladi
//     }
//   }, [position]);

//   return (
//     <div>
//       <button onClick={() => setPosition(position + 10)}>Harakat</button>
//       <div style={{ transform: `translateX(${position}px)`, transition: "transform 0.5s" }}>
//         📦 Harakatlanuvchi obyekt
//       </div>
//     </div>
//   );
// }

// export default AnimationBlocker;
// Agar pozitsiya 100 dan oshsa, useLayoutEffect uni 100 ga qaytaradi va noto‘g‘ri animatsiyani oldini oladi.