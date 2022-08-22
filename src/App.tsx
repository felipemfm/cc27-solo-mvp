import { useState, useEffect } from "react";
import { userNameGenerator } from "./util/userNameGenerator";
import "./App.css";

import Header from "./components/Header";
import MessageView from "./components/MessageView";
import MessageInput from "./components/MessageInput";

function App() {
  const [userInfo, setUserInfo] = useState<{
    name: string;
    token: string;
  } | null>(null);

  useEffect(() => {
    if (!userInfo) {
      setUserInfo(userNameGenerator());
    }
  }, [userInfo]);

  return (
    <div className="App">
      <Header user={userInfo} />
      <MessageView />
      <MessageInput user={userInfo} />
    </div>
  );
}

export default App;
