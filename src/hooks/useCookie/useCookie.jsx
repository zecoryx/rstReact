//! useCookie qanday ishlaydi?
// React uchun useCookie hooki react-use kutubxonasida mavjud.
// npm install react-use

//! Asosiy foydalanish usuli:
// import { useCookie } from "react-use";

// function CookieExample() {
//   const [cookie, setCookie, deleteCookie] = useCookie("myCookie");

//   return (
//     <div>
//       <h2>Cookie bilan ishlash</h2>
//       <p>Saqlangan cookie: {cookie || "Cookie mavjud emas"}</p>

//       <button onClick={() => setCookie("HelloWorld")}>Cookie yaratish</button>
//       <button onClick={() => deleteCookie()}>Cookie o‘chirish</button>
//     </div>
//   );
// }

// export default CookieExample;

// useCookie("cookieNom") — cookie bilan ishlash uchun hook chaqiriladi
// setCookie(value) — yangi cookie yaratadi
// deleteCookie() — cookie’ni o‘chiradi