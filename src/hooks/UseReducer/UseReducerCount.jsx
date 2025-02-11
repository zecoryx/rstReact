// import React, { useReducer } from "react";

// export default function UseReducer() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   function reducer(state, action) {
//     switch (action.type) {
//       case "increment":
//         return { count: state.count + 1 };
//       case "decrement":
//         return { count: state.count - 1 };
//       case "reset":
//         return { count: 0 };
//       default:
//         return state;
//     }
//   }
//   return (
//     <div>
//       <h2>Hisob: {state.count}</h2>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "reset" })}>🔄</button>
//     </div>
//   );
// }

// useReducer(reducer, { count: 0 }) – boshlang‘ich state { count: 0 }.
// dispatch({ type: "increment" }) – hodisalarni chaqiradi.
// "increment", "decrement", "reset" orqali state boshqariladi.