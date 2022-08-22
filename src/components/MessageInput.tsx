import { read } from "fs";
import React, { useEffect, useRef, useState } from "react";
import "./MessageInput.css";

interface props {
  user: {
    name: string;
    token: string;
  } | null;
}

const MessageInput: React.FC<props> = (props) => {
  const [message, setMessage] = useState<string>("");
  const [readyMessage, setReadyMessage] = useState<string | null>(null);

  const sendMessage = () => {
    if (message) {
      setReadyMessage(message);
      setMessage("");
    }
  };

  useEffect(() => {
    console.log({ ...props.user, message: readyMessage });
  }, [readyMessage]);

  return (
    <div className="Input">
      <input
        type="text"
        id="TextInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageInput;
