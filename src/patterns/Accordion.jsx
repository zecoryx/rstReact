import React, { useState, createContext, useContext } from "react";

// 1. Context yaratish - holatni ulashish uchun
const AccordionContext = createContext();

/**
 * Compound Component Pattern:
 * Bu pattern komponentlarni mantiqan bir-biriga bog'langan holda 
 * bo'laklarga bo'lib ishlatish imkonini beradi. 
 * Masalan: <Accordion> <Accordion.Item /> </Accordion>
 */

// Asosiy Accordion komponenti
export function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ openIndex, toggle }}>
      <div style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

// Accordion Item
Accordion.Item = function AccordionItem({ index, title, children }) {
  const { openIndex, toggle } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div style={{ borderBottom: "1px solid #eee" }}>
      <div 
        onClick={() => toggle(index)} 
        style={{ padding: "10px", background: "#f9f9f9", cursor: "pointer", fontWeight: "bold" }}
      >
        {title} {isOpen ? "▲" : "▼"}
      </div>
      {isOpen && <div style={{ padding: "10px", background: "white" }}>{children}</div>}
    </div>
  );
};

export default Accordion;
