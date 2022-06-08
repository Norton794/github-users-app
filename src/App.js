import { useEffect, useState } from "react";
import "./App.css";
import Attribuition from "./components/Attribuition";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ModeContext } from "./context";
import getUsers from './utils/index'



function App() {
  const [mode, setMode] = useState("dark")
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("octocat");
  const [key, setKey] = useState("octocat");


  useEffect(() => {
    getUsers(key).then(function (result) {
      setUser(result)
    })
  }, [key]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <div className={`theme-${mode}`}>
        <div className="app">
          <div className="app__header">
            <h1>devfinder</h1>
            <ThemeSwitcher />
          </div>
          <SearchBar username={username} setUsername={setUsername} setKey={setKey} />
          <Card user={user} />
          <Attribuition />
        </div>
      </div>
    </ModeContext.Provider>
  );
}

export default App;
