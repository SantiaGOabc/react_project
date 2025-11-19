import React, { useState } from "react";
import { enviarPrompt } from "../services/ApiChat";
import "./Chatbot.css";
import chatIcon from "/public/images/img6.jpg";

interface Message {
  content: string;
  type: "user" | "bot";
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleChat = () => {
    if (isVisible) {
      setMessages([]);
    }
    setIsVisible(!isVisible);
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    try {
      setIsLoading(true);

      // Add user message
      setMessages((prev) => [...prev, { content: input, type: "user" }]);

      // Get bot response
      const botResponse = await enviarPrompt(input);

      // Add bot message
      setMessages((prev) => [...prev, { content: botResponse, type: "bot" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          content: "Lo siento, hubo un error al procesar tu solicitud",
          type: "bot",
        },
      ]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isVisible && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Asistente Virtual
            <button className="close-btn" onClick={toggleChat}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message-bubble ${msg.type}`}>
                {msg.content}
                <br />
                <br />
              </div>
            ))}
            {isLoading && (
              <div className="message-bubble bot loading">Escribiendo...</div>
            )}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
              placeholder="¡Hola! ¿En qué puedo ayudarte?"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || input.trim() === ""}
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={toggleChat}>
        <img src={chatIcon} alt="Abrir chat" className="chat-icon" />
      </button>
    </div>
  );
};

export default Chatbot;
