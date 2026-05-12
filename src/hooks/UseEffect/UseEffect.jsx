import React, { useEffect, useState } from 'react'

// Simple module-level cache to prevent refetching during component remounts
let userCache = null;

export default function UseEffect() {
    const [users, setUsers] = useState(userCache || []);

    useEffect(() => {
      if (userCache) return; // Skip if already cached

      const controller = new AbortController();
      const signal = controller.signal;

      fetch("https://jsonplaceholder.typicode.com/users", { signal })
        .then((res) => {
          if (!res.ok) throw new Error("Tarmoq xatosi!");
          return res.json();
        })
        .then((data) => {
          userCache = data;
          setUsers(data);
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            console.error("Foydalanuvchilarni yuklashda xato:", err.message);
          }
        });

      // Cleanup: cancel pending request if component unmounts
      return () => controller.abort();
    }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
