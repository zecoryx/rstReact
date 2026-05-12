import React, { useState, Suspense, lazy } from "react";
import ErrorBoundary from "./patterns/ErrorBoundary";
import { UI_STRINGS } from "./constants/constants";

// Lazy loading components for code splitting
const UseMemoCount = lazy(() => import("./hooks/UseMemo/UseMemoCount"));
const DebounceExample = lazy(() => import("./optimize/DebounceExample"));
const PatternsExample = lazy(() => import("./patterns/PatternsExample"));
const InterviewSection = lazy(() => import("./interview/InterviewSection"));

// Navigatsiya uchun oddiy komponent
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      padding: "10px 20px",
      cursor: "pointer",
      border: "none",
      borderBottom: active ? "3px solid #3498db" : "3px solid transparent",
      background: "none",
      fontWeight: active ? "bold" : "normal",
      color: active ? "#3498db" : "#7f8c8d"
    }}
  >
    {children}
  </button>
);

const FallbackLoader = () => (
  <div style={{ padding: "20px", textAlign: "center", color: "#7f8c8d" }}>
    {UI_STRINGS.LOADERS.DEFAULT}
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState("basics");

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#2c3e50" }}>🚀 React Advanced Learning Hub</h1>
        <p style={{ color: "#7f8c8d" }}>Boshlang'ichdan professional darajagacha bo'lgan yo'l</p>
      </header>

      <nav style={{ display: "flex", justifyContent: "center", borderBottom: "1px solid #eee", marginBottom: "30px", flexWrap: "wrap" }}>
        <TabButton active={activeTab === "basics"} onClick={() => setActiveTab("basics")}>Asosiy Hooklar</TabButton>
        <TabButton active={activeTab === "optimize"} onClick={() => setActiveTab("optimize")}>Optimization</TabButton>
        <TabButton active={activeTab === "patterns"} onClick={() => setActiveTab("patterns")}>Design Patterns</TabButton>
        <TabButton active={activeTab === "libraries"} onClick={() => setActiveTab("libraries")}>Library Guides</TabButton>
        <TabButton active={activeTab === "interview"} onClick={() => setActiveTab("interview")}>Interview Q&A</TabButton>
      </nav>

      <main style={{ background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <ErrorBoundary>
          <Suspense fallback={<FallbackLoader />}>
            {activeTab === "basics" && (
              <section>
                <h2>Native Hooks</h2>
                <p>Reactning o'zida mavjud bo'lgan asosiy hooklar.</p>
                <UseMemoCount />
              </section>
            )}

            {activeTab === "optimize" && (
              <section>
                <h2>Performance Optimization</h2>
                <p>Ilovani tezlashtirish va ortiqcha renderlarning oldini olish.</p>
                <DebounceExample />
              </section>
            )}

            {activeTab === "patterns" && (
              <section>
                <h2>Advanced Design Patterns</h2>
                <PatternsExample />
              </section>
            )}

            {activeTab === "libraries" && (
              <section>
                <h2>External Library Architectures</h2>
                <p>Redux, Zustand va React Query kabi kutubxonalarning ishlash mantiqi.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                  <div style={{ padding: "15px", border: "1px solid #eee", borderRadius: "8px" }}>
                    <h4>State Management</h4>
                    <p>Redux Toolkit & Zustand</p>
                  </div>
                  <div style={{ padding: "15px", border: "1px solid #eee", borderRadius: "8px" }}>
                    <h4>Data Fetching</h4>
                    <p>React Query & Axios Patterns</p>
                  </div>
                </div>
              </section>
            )}

            {activeTab === "interview" && (
              <section>
                <h2>Interview Questions & Answers</h2>
                <p>Frontend va Backend bo'yicha 200 ta eng muhim savol-javoblar.</p>
                <InterviewSection />
              </section>
            )}
          </Suspense>
        </ErrorBoundary>
      </main>

      <footer style={{ marginTop: "50px", textAlign: "center", color: "#bdc3c7", fontSize: "0.9rem" }}>
        © 2026 rstReact Advanced Course Structure
      </footer>
    </div>
  );
}

export default App;
