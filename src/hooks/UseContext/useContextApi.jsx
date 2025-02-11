//* 1-qadam: Context yaratish
//* import { createContext, useState, useEffect } from "react";

// export const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);

//   return (
//     <UserContext.Provider value={{ user }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
//* UserContext yaratildi va user ma’lumotlarini saqlaydi.
//* useEffect bilan API so‘rov yuborib, user ni yangiladik.


//* 2-qadam: App ni UserProvider bilan o‘rash
// import { UserProvider } from "./UserContext";
// import Profile from "./Profile";

// function App() {
//   return (
//     <UserProvider>
//       <Profile />
//     </UserProvider>
//   );
// }
// export default App;
// Profile komponenti user ma’lumotlarini olish uchun UserProvider ichida.


// 3-qadam: useContext bilan ma’lumot olish
// import { useContext } from "react";
// import { UserContext } from "./UserContext";

// function Profile() {
//   const { user } = useContext(UserContext);

//   return (
//     <div>
//       {user ? (
//         <h2>Foydalanuvchi: {user.name}</h2>
//       ) : (
//         <p>Yuklanmoqda...</p>
//       )}
//     </div>
//   );
// }
// export default Profile;
// useContext(UserContext) orqali foydalanuvchini olish va ekranga chiqarish mumkin.

