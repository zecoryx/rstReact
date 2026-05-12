/**
 * ZUSTAND GUIDE:
 * 
 * Zustand - Redux-ga nisbatan ancha yengil va oson holat boshqaruvchisi.
 * Hozirgi kunda juda ommalashgan.
 * 
 * O'rnatish: npm install zustand
 */

/*
// 1. STORE YARATISH (src/state-management/useStore.js)
import { create } from 'zustand';

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));


// 2. KOMPONENTDA ISHLATISH
function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} ta ayiq bor.</h1>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>Ayiq qo'shish</button>;
}
*/

console.log("Zustand qo'llanmasi: Fayl ichidagi kommentlarni o'qing.");
