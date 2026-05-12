import { useState } from "react";
import useDebounce from "./useDebounce";

function DebounceExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Optimization: useDebounce</h3>
      <p>Inputga yozing, API so'rovi 500ms dan keyin yuboriladi (konsolda ko'ring).</p>
      <input
        type="text"
        placeholder="Qidiruv..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", width: "100%" }}
      />
      <div style={{ marginTop: "10px" }}>
        <strong>Hozirgi qiymat:</strong> {searchTerm} <br />
        <strong>Debounced qiymat:</strong> {debouncedSearchTerm}
      </div>
    </div>
  );
}

export default DebounceExample;
