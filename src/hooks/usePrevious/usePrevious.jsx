//! React bu hook-ni ichiga kiritmagan, shuning uchun biz uni o‘zimiz yaratishimiz kerak.
// Custom usePrevious Hook yaratish
// import { useRef, useEffect } from "react";
// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value; // Hozirgi qiymatni saqlab qolamiz
//   }, [value]);

//   return ref.current; // Oldingi qiymatni qaytaramiz
// }
// export default usePrevious;


//! usePrevious bilan prop o‘zgarishini kuzatish
// import React, { useState } from "react";
// import usePrevious from "./usePrevious";
// function UserProfile({ username }) {
//   const prevUsername = usePrevious(username);
//   return (
//     <div>
//       <h2>Hozirgi foydalanuvchi: {username}</h2>
//       <h3>Oldingi foydalanuvchi: {prevUsername || "Yo‘q"}</h3>
//     </div>
//   );
// }
// function App() {
//   const [user, setUser] = useState("EternityEgo");

//   return (
//     <div>
//       <UserProfile username={user} />
//       <button onClick={() => setUser("HydraCoder")}>Foydalanuvchini o‘zgartirish</button>
//     </div>
//   );
// }

// export default App;
// Agar username prop o‘zgarsa, usePrevious avvalgi foydalanuvchi ismini saqlab qoladi.
// Ilk marta yuklanganda, prevUsername undefined bo‘ladi, shuning uchun "Yo‘q" deb ko‘rsatamiz