import RobotProfileImage from "../assets/chatbot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";
import dayjs from "dayjs";

function ChatMessage({ message, sender }) {
  const time = dayjs().format("h:mm a");
  return (
    <div className={`message-wrapper ${sender}`}>
      {sender === "robot" && (
        <img src={RobotProfileImage} alt="robot" className="avatar" />
      )}
      <div className={`message-content ${sender}`}>
        <b>{message}</b>
        <div
          className={
            sender === "robot" ? "message-time-robot" : "message-time-user"
          }
        >
          <b>{time}</b>
        </div>
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} alt="user" className="avatar" />
      )}
    </div>
  );
}

export default ChatMessage;
