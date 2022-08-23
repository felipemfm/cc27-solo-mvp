import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "./MessageView.css";

interface props {
  user: {
    name: string;
    token: string;
  } | null;
}

interface message {
  name: string;
  token: string;
  message: string;
  user: string;
  date: string;
}

const apiServer =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_LOCAL_SERVER
    : process.env.REACT_APP_DEPLOY_SERVER;

const MessageView: React.FC<props> = (props) => {
  const [messageList, setMessageList] = useState<message[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      getChatData();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getChatData = async () => {
    const data: { data: message[] } = await axios.get(apiServer!, {
      params: {
        len: messageList.length,
      },
    });
    const messageData = data.data;
    messageData && setMessageList(messageData.reverse());
  };
  return (
    <div className="view">
      {messageList.length > 0 &&
        messageList.map((element: message, i: number) => {
          return (
            <div key={i} className="message">
              <p className="message-text">{element.message}</p>
              <div className="message-bottom">
                <p>
                  {element.user === props.user?.name ? "YOU" : element.user}
                </p>
                <p>{moment(element.date).fromNow()}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MessageView;
