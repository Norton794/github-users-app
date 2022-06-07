import React from "react";
import { MoonIcon, SunIcon } from "./Icons";
import "../ThemeSwitcher.css";
import { ModeContext } from "../context/index";

export default function ThemeSwitcher() {
  const context = React.useContext(ModeContext);

  function change(mode) {
    if (mode === "light") {
      context.setMode("dark");
    } else {
      context.setMode("light");
    }
  }

  return (
    <div className="theme__container" onClick={() => change(context.mode)}>
      <span className={context.mode}>
        {context.mode === "light" ? "DARK" : "LIGHT"}
      </span>
      {context.mode === "light" ? MoonIcon : SunIcon}
    </div>
  );
}
