import { useState, useEffect } from "react";
import { User } from "./globals";
import { userNameGenerator } from "./util/userNameGenerator";
import "./App.css";

import Header from "./components/Header";

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
    </div>
  );
}

export default App;
