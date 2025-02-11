import { useReducer } from "react";

function UseReducerAuth() {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const initialState = {
    isAuthenticated: false,
    user: null,
  };

  function authReducer(state, action) {
    switch (action.type) {
      case "login":
        return { isAuthenticated: true, user: action.payload };
      case "logout":
        return { isAuthenticated: false, user: null };
      default:
        return state;
    }
  }

  return (
    <div>
      {state.isAuthenticated ? (
        <>
          <h2>Xush kelibsiz, {state.user}!</h2>
          <button onClick={() => dispatch({ type: "logout" })}>Chiqish</button>
        </>
      ) : (
        <>
          <h2>Login qiling</h2>
          <button onClick={() => dispatch({ type: "login", payload: "EternityEgo" })}>Kirish</button>
        </>
      )}
    </div>
  );
}
export default UseReducerAuth;

// useEffect ichida API so‘rov bajariladi.
// "start" boshlanganida yuklanish ekranga chiqadi.
// "success" yoki "error" natijalarga qarab ko‘rsatiladi.
// "start" – yuklanish boshlanganda loading: true bo‘ladi.
// "success" – ma’lumot muvaffaqiyatli kelganda data saqlanadi.
// "error" – xatolik bo‘lsa, error saqlanadi.