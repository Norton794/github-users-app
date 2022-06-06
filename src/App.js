import { useEffect, useState } from "react";
import "./App.css";
import Attribuition from "./components/Attribuition";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import ThemeSwitcher from "./components/ThemeSwitcher";




function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("norton794");
  const [key, setKey] = useState("norton794");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${key}`)
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((err) => setError(err));
  }, [key]);

  return (
    <div className="theme-light">
      <div className="app">
        <div className="app__header">
          <h1>devfinder</h1>
          <ThemeSwitcher theme={`DARK`} />
        </div>
        <SearchBar username={username} setUsername={setUsername} setKey={setKey} />
        {!error ? <Card user={user} /> : <h3 className="no-results">No Results</h3>}
        <Attribuition />
      </div>
    </div>
  );
}

export default App;
