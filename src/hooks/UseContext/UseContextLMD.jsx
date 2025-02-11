//useContext ishlash tartibi (faqat React) light mode and Dark mode

//* 1-qadam: Context yaratish (createContext)

//* Avval context yaratamiz:
// import { createContext } from "react";
// export const ThemeContext = createContext();


//* 2-qadam: Provider bilan o‘rab olish (Context.Provider)
//* Kontekstni butun ilovaga tarqatamiz.
// import { useState } from "react";
// import { ThemeContext } from "./ThemeContext";
// import ChildComponent from "./ChildComponent";

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <ChildComponent />
//     </ThemeContext.Provider>
//   );
// }
// export default App;
//* ThemeContext.Provider butun ChildComponent ga theme ni tarqatadi.
//* value={{ theme, setTheme }} orqali theme va setTheme uzatildi.


//* 3-qadam: useContext bilan ma’lumot olish
//* Endi ChildComponent ichida useContext dan foydalanamiz.
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// function ChildComponent() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div style={{ background: theme === "dark" ? "#333" : "#fff", color: theme === "dark" ? "#fff" : "#000" }}>
//       <p>Hozirgi mavzu: {theme}</p>
//       <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//         Mavzuni o‘zgartirish
//       </button>
//     </div>
//   );
// }
// export default ChildComponent;

//* useContext(ThemeContext) orqali theme va setTheme ni oldik.
//* Tugma bosilganda theme light yoki dark ga o‘zgaradi.