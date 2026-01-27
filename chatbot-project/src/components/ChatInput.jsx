import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";
import ClearButton from "./ClearButton";

export function ChatInput({
  chatMessages,
  setChatMessages,
  loading,
  setLoading,
}) {
  const [inputText, setInputText] = useState("");

  function handleInputText(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      sendMessage();
    } else if (e.key === "Escape") {
      setInputText("");
    } else {
      return;
    }
  }
  async function sendMessage() {
    if (!inputText.trim()) return;

    setInputText("");
    //Add User Message
    const userMessage = {
      message: inputText,
      sender: "user",
      id: crypto.randomUUID(),
    };
    const updatedChatMessages = [...chatMessages, userMessage];
    setChatMessages(updatedChatMessages);
    setLoading(true);

    try {
      const response = await Chatbot.getResponseAsync(inputText);
      // console.log(response); // from chatbot.js external library
      setLoading(false);

      const robotChatMessage = {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      };
      setChatMessages([...updatedChatMessages, robotChatMessage]);
    } catch (error) {
      setLoading(false);
      const errorMessage = {
        message: "Sorry, Please try again! " + error,
        sender: "robot",
        id: crypto.randomUUID(),
      };
      setChatMessages([...updatedChatMessages, errorMessage]);
    }
  }
  
  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        onChange={handleInputText}
        onKeyDown={handleKeyDown}
        value={inputText}
        disabled={loading}
      />
      <button className="send-button" onClick={sendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>
      <ClearButton chatMessages={chatMessages} setChatMessages={setChatMessages} loading={loading} />
    </div>
  );
}
