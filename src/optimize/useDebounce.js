import { useState, useEffect } from "react";

/**
 * useDebounce hook - Qiymat o'zgargandan so'ng ma'lum vaqt o'tgachgina 
 * yangilanishni amalga oshiradi. Bu asosan qidiruv (search) inputlari 
 * va API so'rovlarini kamaytirish (optimize) uchun ishlatiladi.
 * 
 * @param {any} value - Kuzatilayotgan qiymat
 * @param {number} delay - Kechikish vaqti (ms)
 * @returns {any} - Debounced (kechiktirilgan) qiymat
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Taymerni o'rnatish
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Agar value yoki delay o'zgarsa, eski taymerni tozalash
    // Bu "cleanup function" deb ataladi va ortiqcha so'rovlarning oldini oladi
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
