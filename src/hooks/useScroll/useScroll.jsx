//! useScroll qanday ishlaydi?
// 1️⃣ Butun sahifa scroll holatini olish (window.scrollY)
// Bu usul butun sahifaning scroll balandligini olish uchun ishlatiladi.
// import { useState, useEffect } from "react";

// function useScroll() {
//   const [scrollY, setScrollY] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return scrollY;
// }
// export default useScroll;

// useState(0) — boshlang‘ich scroll holati 0 qilib o‘rnatiladi
// handleScroll() — har safar sahifa aylantirilganda scrollY ni yangilaydi
// useEffect() — sahifa yuklanganda event listener qo‘shiladi, komponent unmount bo‘lganda esa olib tashlanadi


//! useScroll qanday ishlatiladi?
// 1️⃣ Sticky Navbar (Fiksatsiyalangan Navbar)
// Navbar scroll bo‘lganda fonini o‘zgartirish:
// import React from "react";
// import useScroll from "./useScroll";

// function Navbar() {
//   const scrollY = useScroll();
//   return (
//     <nav style={{
//       position: "fixed",
//       width: "100%",
//       backgroundColor: scrollY > 50 ? "black" : "transparent",
//       color: "white",
//       padding: "10px",
//       transition: "background-color 0.3s",
//     }}>
//       Men Navbarman
//     </nav>
//   );
// }
// export default Navbar;

// Agar scrollY > 50 bo‘lsa, navbar qora (black) rangga o‘zgaradi
// Aks holda, shaffof (transparent) holatda qoladi


//! "Yuqoriga qaytish" tugmasi
// Scroll pastga tushganda tugma paydo bo‘lib, yuqoriga qaytishga imkon beradi.
// import React from "react";
// import useScroll from "./useScroll";

// function ScrollToTop() {
//   const scrollY = useScroll();
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   return (
//     <button 
//       onClick={scrollToTop} 
//       style={{
//         position: "fixed", 
//         bottom: "20px", 
//         right: "20px", 
//         display: scrollY > 100 ? "block" : "none",
//         padding: "10px 15px",
//         background: "blue",
//         color: "white",
//         borderRadius: "5px",
//         border: "none",
//         cursor: "pointer"
//       }}>
//       ↑ Yuqoriga
//     </button>
//   );
// }
// export default ScrollToTop;

// scrollY > 100 bo‘lsa, tugma ko‘rinadi, aks holda yashirin qoladi
// scrollToTop() tugmani bosganda sahifani tepa qismga qaytaradi


//!  Ma'lum elementning scroll pozitsiyasini olish
// Agar faqat bitta elementni scroll qilishni kuzatmoqchi bo‘lsak:
// import { useState, useEffect, useRef } from "react";
// function useScrollElement(ref) {
//   const [scrollTop, setScrollTop] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         setScrollTop(ref.current.scrollTop);
//       }
//     };
//     if (ref.current) {
//       ref.current.addEventListener("scroll", handleScroll);
//     }
//     return () => {
//       if (ref.current) {
//         ref.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [ref]);
//   return scrollTop;
// }
// export default useScrollElement;
// Berilgan ref elementni scroll qilish orqali scrollTop ni kuzatadi
// Agar ref.current mavjud bo‘lsa, scrollTop qiymati yangilanadi
//? davomi 
// import React, { useRef } from "react";
// import useScrollElement from "./useScrollElement";
// function ScrollableDiv() {
//   const divRef = useRef(null);
//   const scrollTop = useScrollElement(divRef);
//   return (
//     <div>
//       <p>Scroll top: {scrollTop}px</p>
//       <div ref={divRef} style={{
//         height: "200px",
//         overflowY: "scroll",
//         border: "1px solid black",
//         padding: "10px"
//       }}>
//         <div style={{ height: "500px" }}>
//           Ko‘p matnlar...
//         </div>
//       </div>
//     </div>
//   );
// }
// export default ScrollableDiv;
// divRef elementiga useScrollElement ni qo‘shib, aynan shu elementning scroll qiymatini olamiz
// Har safar scroll bo‘lganda scrollTop yangilanadi