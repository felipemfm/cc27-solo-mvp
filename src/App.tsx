import { useState, useEffect } from "react";
import { User } from "./globals";
import { userNameGenerator } from "./util/userNameGenerator";
import "./App.css";

import Header from "./components/Header";
import MessageView from "./components/MessageView";
import MessageInput from "./components/MessageInput";

function App() {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    if (!userInfo) {
      setUserInfo(userNameGenerator());
    }
  }, [userInfo]);

  console.log(userInfo);

  return (
    <div className="App">
      <Header user={userInfo} />
      <MessageView />
      <MessageInput />
    </div>
  );
}

export default App;
