import { useEffect, useState } from "react";
import axios from "axios";
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
  const [messageList, setMessageList] = useState<{ data: message[] }>({
    data: [],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      getChatData();
    }, 1000);
    return () => clearTimeout(timer);
  });

  const getChatData = async () => {
    const data: { data: message[] } = await axios.get(apiServer!, {
      params: {
        len: messageList.data.length,
      },
    });
    data.data && setMessageList(data);
  };
  return (
    <div className="View">
      {messageList.data.length > 0 &&
        messageList.data.map((element: message, i: number) => {
          return (
            <div
              key={i}
              className={element.token === props.user?.token ? "right" : "left"}
            >
              <p>{element.message}</p>
              <p>
                {element.user}#{element.token}
              </p>
              <p>{element.date}</p>
            </div>
          );
        })}
    </div>
  );
};

export default MessageView;
