import { useState, useEffect } from "react";
import { User } from "./globals";
import { userNameGenerator } from "./util/userNameGenerator";

function App() {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    if (!userInfo) {
      setUserInfo(userNameGenerator());
    }
  }, [userInfo]);

  console.log(userInfo);

  return <div></div>;
}

export default App;
