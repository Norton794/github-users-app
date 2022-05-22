import "./App.css";
import Attribuition from "./components/Attribuition";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="theme-light">
      <div className="app">
        <div className="app__header">
          <h1>devfinder</h1>
          <ThemeSwitcher theme={`DARK`}/>
        </div>
        <SearchBar/>
        <Card/>
        <Attribuition/>
      </div>
    </div>
  );
}

export default App;
