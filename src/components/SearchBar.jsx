import React from "react";
import "../SearchBar.css";
import { SearchIcon } from "./Icons";
import { ModeContext } from "../context/index";
export default function SearchBar(props) {
  const context = React.useContext(ModeContext);
  return (
    <div className={`search-form `}>
      <div className="search__wrapper">
        <div className="search__icon">{SearchIcon}</div>
        <div>
          <input
            className={`search__input ${context.mode}`}
            type="text"
            placeholder="Search Github Username..."
            value={props.username}
            onChange={(e) => {
              props.setUsername(e.target.value);
            }}
          />
          <button
            className="search__button"
            type="button"
            onClick={() => props.setKey(props.username)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
