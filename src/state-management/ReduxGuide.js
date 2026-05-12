/**
 * REDUX TOOLKIT (RTK) GUIDE:
 * 
 * Redux Toolkit - bu global holatni (state) boshqarish uchun eng mashhur kutubxona.
 * Quyida uning asosiy tuzilmasi (Store va Slice) ko'rsatilgan.
 * 
 * O'rnatish: npm install @reduxjs/toolkit react-redux
 */

/*
// 1. SLICE YARATISH (src/state-management/counterSlice.js)
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;


// 2. STORE YARATISH (src/state-management/store.js)
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});


// 3. KOMPONENTDA ISHLATISH (src/state-management/ReduxExample.jsx)
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function ReduxExample() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
*/

console.log("Redux Toolkit qo'llanmasi: Fayl ichidagi kommentlarni o'qing.");
