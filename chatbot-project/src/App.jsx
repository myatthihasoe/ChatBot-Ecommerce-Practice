import { useEffect, useState } from "react";
import "./App.css";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";

function App() {
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Chatbot.addResponses({
      "Do you u have girlfriend?": "No, I am just a bot. How about you?.",
      "Yes, I have a girlfriend.": "That's great to hear. What's her name?",
      "Eaindray Moe": "What a beautiful name!",
      goodbye: "Goodbye! Have a great day.",
    });
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [loading, chatMessages]);

  return (
    <div className="chat-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} loading={loading} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
