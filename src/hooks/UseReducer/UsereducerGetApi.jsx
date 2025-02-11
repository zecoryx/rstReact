import { useReducer, useEffect } from "react";

function UseReducerGetApi() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };

  function fetchReducer(state, action) {
    switch (action.type) {
      case "start":
        return { loading: true, data: null, error: null };
      case "success":
        return { loading: false, data: action.payload, error: null };
      case "error":
        return { loading: false, data: null, error: action.payload };
      default:
        return state;
    }
  }

  useEffect(() => {
    dispatch({ type: "start" });

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "success", payload: data }))
      .catch((error) => dispatch({ type: "error", payload: error.message }));
  }, []);

  return (
    <div>
      {state.loading && <p>Yuklanmoqda...</p>}
      {state.error && <p>Xatolik: {state.error}</p>}
      {state.data && <h2>{state.data.title}</h2>}
    </div>
  );
}
export default UseReducerGetApi;

// "login" bosilganda, foydalanuvchi EternityEgo bo‘ladi.
// "logout" bosilganda, chiqish qilinadi.