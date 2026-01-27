import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import RobotProfileImage from "../assets/chatbot.png";
import "./ChatMessages.css";

export function ChatMessages({ chatMessages, loading }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    const container = chatMessagesRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chatMessages, loading]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        );
      })}
      {loading && (
        <div className="loading-message">
          <img src={RobotProfileImage} alt="robot" className="avatar" />
          <div className="loading-content">Loading...</div>
        </div>
      )}
    </div>
  );
}

// export default ChatMessages;
