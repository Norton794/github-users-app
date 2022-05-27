import React from "react";
import "../SearchBar.css";
import { SearchIcon } from "./Icons";

export default function SearchBar(props) {
  return (
    <form className="search-form">
      <div className="search__wrapper">
        <div className="search__icon">{SearchIcon}</div>
        <div>
          <input
            className="search__input"
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
    </form>
  );
}
