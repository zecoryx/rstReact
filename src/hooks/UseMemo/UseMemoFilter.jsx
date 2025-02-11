import React from "react";
import { useState, useMemo } from "react";

export default function UseMemoFilter() {
  const filteredUsers = useMemo(() => {
    console.log("Foydalanuvchilar filterlanmoqda...");
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  }, [search]);
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
  ];
  const [search, setSearch] = useState("");
  return (
    <div>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>{" "}
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Ism qidirish..." />
        <UserList search={search} />
      </div>
    </div>
  );
}

// useMemo users.filter(...) hisoblashni faqat search o‘zgarganda amalga oshiradi.
// Agar useMemo bo‘lmasa, har safar inputga yozganda, filter funksiyasi qayta bajariladi.