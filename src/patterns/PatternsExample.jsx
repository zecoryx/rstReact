import Accordion from "./Accordion";

function PatternsExample() {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Design Patterns: Compound Components</h3>
      <Accordion>
        <Accordion.Item index={0} title="React nima?">
          React - bu foydalanuvchi interfeyslarini yaratish uchun JavaScript kutubxonasi.
        </Accordion.Item>
        <Accordion.Item index={1} title="Compound Components nima?">
          Bu pattern komponentlarni bir-biri bilan context orqali bog'lab, moslashuvchan UI yaratishga yordam beradi.
        </Accordion.Item>
        <Accordion.Item index={2} title="Nega buni ishlatish kerak?">
          Kodning o'qilishi osonlashadi va komponentning ichki holatini boshqarish soddalashadi.
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default PatternsExample;
