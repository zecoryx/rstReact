import { useState } from "react";
import { frontendQuestions } from "./frontend/questions";

function InterviewSection() {
  const [type, setType] = useState("frontend");
  const [searchTerm, setSearchTerm] = useState("");
  const questions = frontendQuestions;

  const filteredQuestions = questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div style={{ padding: "10px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setType("frontend")}
          style={{
            background: type === "frontend" ? "#3498db" : "#ecf0f1",
            color: type === "frontend" ? "white" : "black",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Frontend (100)
        </button>
      </div>

      <input
        type="text"
        placeholder="Savollarni qidirish..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <div
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #eee",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        {filteredQuestions.map((q) => (
          <details
            key={q.id}
            style={{
              marginBottom: "15px",
              padding: "10px",
              background: "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <summary
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                color: "#2c3e50",
              }}
            >
              {q.id}. {q.question}
            </summary>
            <p
              style={{
                marginTop: "10px",
                color: "#34495e",
                lineHeight: "1.6",
                borderLeft: "3px solid #3498db",
                paddingLeft: "10px",
              }}
            >
              {q.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default InterviewSection;
