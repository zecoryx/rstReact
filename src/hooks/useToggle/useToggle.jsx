//! useToggle qanday ishlaydi?
// Oddiy useState bilan toggling (eski usul)
// Agar biz useState ishlatsak, quyidagi kodni yozishimiz kerak:
// const [isOpen, setIsOpen] = useState(false);
// const toggle = () => setIsOpen(prev => !prev);
// Bunda har safar yangi funksiyani yozish kerak bo‘ladi. useToggle bu jarayonni soddalashtiradi.


//! useToggle hookni yozamiz
// React o‘zida useToggle hookni bermaydi, shuning uchun biz custom hook yaratamiz:
// import { useState } from "react";

// function useToggle(initialValue = false) {
//   const [state, setState] = useState(initialValue);
//   const toggle = () => setState(prev => !prev);
//   return [state, toggle];
// }

// export default useToggle;
// useState orqali boshlang‘ich qiymat (false) beriladi
// toggle() funksiyasi har safar qiymatni true ↔ false qilib o‘zgartiradi
// Hook state va toggle funksiyasini qaytaradi


//! useToggle qanday ishlatiladi?
// 1️⃣ Modal yoki menyuni ochish/yopish
// import React from "react";
// import useToggle from "./useToggle";

// function ModalExample() {
//   const [isOpen, toggle] = useToggle(false);
//   return (
//     <div>
//       <button onClick={toggle}>
//         {isOpen ? "Modani yopish" : "Modani ochish"}
//       </button>

//       {isOpen && <div className="modal">Men Modalman!</div>}
//     </div>
//   );
// }
// export default ModalExample;

// Tugmaga bosganda toggle modalni ochib/yopadi
// isOpen && <div className="modal"> qismi faqat isOpen === true bo‘lsa, modalni ko‘rsatadi


//! Yorug‘lik/Qorong‘i rejimni almashtirish
// import React from "react";
// import useToggle from "./useToggle";

// function ThemeSwitcher() {
//   const [isDark, toggleTheme] = useToggle(false);
//   return (
//     <div style={{ background: isDark ? "#333" : "#fff", color: isDark ? "#fff" : "#000", padding: "20px" }}>
//       <p>{isDark ? "Qorong‘i rejim" : "Yorug‘ rejim"}</p>
//       <button onClick={toggleTheme}>Rejimni almashtirish</button>
//     </div>
//   );
// }
// export default ThemeSwitcher;

// toggleTheme() har safar isDark ni true/false qilib o‘zgartiradi
// isDark bo‘lsa, fon #333, matn rangi esa #fff bo‘ladi


//! Tugmani faollashtirish/yashirish
// import React from "react";
// import useToggle from "./useToggle";

// function ToggleButton() {
//   const [isActive, toggleActive] = useToggle(false);
//   return (
//     <div>
//       <button onClick={toggleActive}>
//         {isActive ? "Faol holatda" : "Faol emas"}
//       </button>
//     </div>
//   );
// }
// export default ToggleButton;

// Tugmaga bosganda isActive qiymati o‘zgaradi (true/false)
// Matn Faol holatda yoki Faol emas deb chiqadi
