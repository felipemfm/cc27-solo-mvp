import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MessageInput.css";

interface props {
  user: {
    name: string;
    token: string;
  } | null;
}

const apiServer =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_SERVER
    : process.env.REACT_APP_DEPLOY_SERVER;

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
    if (readyMessage && props.user) {
      axios.post(apiServer!, {
        token: props.user!.token,
        user: props.user!.name,
        message: readyMessage,
      });
      setReadyMessage("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
