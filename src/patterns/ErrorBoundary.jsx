import React from "react";

/**
 * ErrorBoundary:
 * Komponentlar darajasida xatolarni tutib qolish va 
 * butun ilova (App) "qulab" tushishining oldini olish uchun.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Keyingi renderda xato ekranini ko'rsatish
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Xatoni servisga yuborish (masalan: Sentry)
    // Production muhitida batafsil xatolarni log qilmaslik kerak
    if (process.env.NODE_ENV === 'development') {
      console.error("Xato yuz berdi:", error, errorInfo);
    } else {
      // Production-da faqat xato ID-sini yoki umumiy xabarni log qilish
      console.error("Ilova xatosi yuz berdi. Xato kodi: ", Date.now());
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", background: "#fee2e2", color: "#b91c1c", borderRadius: "8px" }}>
          <h2>Nimadir xato ketdi.</h2>
          <button onClick={() => window.location.reload()}>Sahifani yangilash</button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
