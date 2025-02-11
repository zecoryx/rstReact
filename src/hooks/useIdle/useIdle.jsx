 //! Avtomatik logout qilish

// import { useIdle } from "@uidotdev/usehooks";

// function AutoLogout() {
//   const isIdle = useIdle(30 * 60 * 1000); // 30 daqiqa

//   useEffect(() => {
//     if (isIdle) {
//       alert("Siz uzoq vaqt harakatsiz qoldingiz. Logout qilinasiz!");
//       // Logout funksiyasini chaqirish
//     }
//   }, [isIdle]);

//   return <p>{isIdle ? "Siz harakatsiz!" : "Siz aktivsiz!"}</p>;
// }
// Agar foydalanuvchi 10 soniya hech narsa qilmasa, video pauza qilinadi.


//! Asosiy ishlatish usuli:
// import { useIdle } from "@uidotdev/usehooks";
// function App() {
//   const isIdle = useIdle(5000); // 5 soniyadan keyin IDLE bo‘ladi
//   return (
//     <div>
//       {isIdle ? <p>🛑 Foydalanuvchi harakatsiz!</p> : <p>✅ Foydalanuvchi aktiv!</p>}
//     </div>
//   );
// }
// export default App;
// Agar foydalanuvchi 5 soniya hech narsa qilmasa, "🛑 Foydalanuvchi harakatsiz!" chiqadi.
// Agar foydalanuvchi sichqoncha yoki klaviaturani ishlatsa, "✅ Foydalanuvchi aktiv!" bo‘ladi.


