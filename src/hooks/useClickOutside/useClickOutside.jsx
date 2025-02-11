//! useClickOutside qanday ishlaydi?
// React uchun useClickOutside hooki react-use kutubxonasida mavjud.
// npm install react-use

//! Asosiy foydalanish usuli:
// import { useClickAway } from "react-use";
// import { useRef, useState } from "react";

// function ClickOutsideExample() {
//   const ref = useRef(null);
//   const [open, setOpen] = useState(false);

//   useClickAway(ref, () => {
//     setOpen(false);
//   });

//   return (
//     <div>
//       <button onClick={() => setOpen(true)}>Dropdownni och</button>
//       {open && (
//         <div ref={ref} style={{ border: "1px solid black", padding: "10px", width: "150px" }}>
//           Men dropdownman
//         </div>
//       )}
//     </div>
//   );
// }

// export default ClickOutsideExample;
// useRef — elementni tanib olish uchun ishlatiladi
// useClickAway(ref, callback) — agar ref tashqarisiga bosilsa, callback funksiyasi chaqiriladi
// Dropdown tugmasi bosilganda setOpen(true), tashqariga bosilsa esa setOpen(false)