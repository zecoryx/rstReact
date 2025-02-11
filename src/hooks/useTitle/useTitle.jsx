//! useTitle qanday ishlaydi?
// 1️⃣ useEffect yordamida document.title ni yangilash
// Quyidagi hook sahifa sarlavhasini o‘zgartiradi:
// import { useEffect } from "react";

// function useTitle(title) {
//   useEffect(() => {
//     document.title = title;
//   }, [title]);
// }
// export default useTitle;

// useEffect() har safar title o‘zgarganda document.title ni yangilaydi
// [title] dependency orqali faqatgina title o‘zgarganda hook qayta ishlaydi


//! useTitle qanday ishlatiladi?
// 1️⃣ Oddiy foydalanish
// Sahifa sarlavhasini "Bosh sahifa" deb o‘rnatish:
// import React from "react";
// import useTitle from "./useTitle";

// function Home() {
//   useTitle("Bosh sahifa - Mening Ilovam");
//   return <h1>Salom, bu Bosh sahifa!</h1>;
// }

// export default Home;
// 📌 Natija: Brauzerning tab sarlavhasi "Bosh sahifa - Mening Ilovam" ga o‘zgaradi.



//! Dinamik sarlavha o‘rnatish
// Agar sarlavha ma’lumotlar bazasidan yoki useState dan olinadigan bo‘lsa:
// import React, { useState } from "react";
// import useTitle from "./useTitle";

// function Profile() {
//   const [username, setUsername] = useState("EternityEgo");
//   useTitle(`${username} - Profil`);
//   return (
//     <div>
//       <h1>Foydalanuvchi: {username}</h1>
//       <button onClick={() => setUsername("Yangi Ism")}>Ismni o'zgartirish</button>
//     </div>
//   );
// }

// export default Profile;
// 📌 Natija: username o‘zgarsa, tab sarlavhasi ham yangilanadi ("EternityEgo - Profil" → "Yangi Ism - Profil").


//! Yuklanish jarayonida "Loading..." chiqarish
// Ma’lumotlarni yuklash jarayonida vaqtinchalik "Yuklanmoqda..." yozuvini chiqarish:
// import React, { useState, useEffect } from "react";
// import useTitle from "./useTitle";

// function Dashboard() {
//   const [loading, setLoading] = useState(true);
//   useTitle(loading ? "Yuklanmoqda..." : "Dashboard - Mening Ilovam");
//   useEffect(() => {
//     setTimeout(() => setLoading(false), 3000); // 3 soniyadan keyin yuklash tugaydi
//   }, []);
//   return <h1>{loading ? "Ma'lumotlar yuklanmoqda..." : "Dashboardga xush kelibsiz!"}</h1>;
// }
// export default Dashboard;

// Dastlab "Yuklanmoqda..." chiqariladi
// 3 soniyadan keyin "Dashboard - Mening Ilovam" deb o‘zgaradi


//! Tab orqali foydalanuvchiga xabar berish
// Agar foydalanuvchi sahifani tark etsa, tab sarlavhasida "⚠ Qaytib keling!" deb yozish mumkin:
// import { useEffect, useState } from "react";

// function useAttentionTitle(defaultTitle, awayTitle) {
//   const [isTabActive, setIsTabActive] = useState(true);
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       setIsTabActive(!document.hidden);
//     };
//     document.addEventListener("visibilitychange", handleVisibilityChange);
//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);
//   useEffect(() => {
//     document.title = isTabActive ? defaultTitle : awayTitle;
//   }, [isTabActive, defaultTitle, awayTitle]);
// }

// export default useAttentionTitle;

//?  Foydalanish usuli:
// import React from "react";
// import useAttentionTitle from "./useAttentionTitle";

// function NotificationPage() {
//   useAttentionTitle("Mening Ilovam", "⚠ Qaytib keling!");
//   return <h1>Ilovada ishlashda davom eting!</h1>;
// }

// export default NotificationPage;

// Foydalanuvchi boshqa tabga o‘tsa, "⚠ Qaytib keling!" deb yoziladi
// Tabga qaytsa, "Mening Ilovam" tiklanadi 