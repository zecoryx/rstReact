import { useState, useEffect, useRef, useCallback } from "react";

/**
 * useWebSocket Hook:
 * Haqiqiy vaqt rejimida (real-time) server bilan bog'lanish uchun.
 * 
 * @param {string} url - WebSocket server manzili
 */
function useWebSocket(url) {
  const [lastMessage, setLastMessage] = useState(null);
  const [readyState, setReadyState] = useState("CONNECTING");
  const ws = useRef(null);

  useEffect(() => {
    try {
      ws.current = new WebSocket(url);

      ws.current.onopen = () => setReadyState("OPEN");
      ws.current.onclose = () => setReadyState("CLOSED");
      ws.current.onmessage = (event) => setLastMessage(event.data);
      ws.current.onerror = () => {
        setReadyState("ERROR");
        console.error("WebSocket connection error");
      };

      return () => {
        if (ws.current) {
          ws.current.onopen = null;
          ws.current.onclose = null;
          ws.current.onmessage = null;
          ws.current.onerror = null;
          ws.current.close();
        }
      };
    } catch (error) {
      setReadyState("ERROR");
      console.error("WebSocket initialization error:", error.message);
    }
  }, [url]);

  const sendMessage = useCallback((message) => {
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(message);
    }
  }, []);

  return { lastMessage, readyState, sendMessage };
}

export default useWebSocket;
