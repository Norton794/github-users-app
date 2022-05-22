import React from "react";
import { MoonIcon } from "./Icons";
import "../ThemeSwitcher.css"

export default function ThemeSwitcher({ theme }) {
  return (
    <div className="theme__container">
      <span>{theme}</span> {MoonIcon}
    </div>
  );
}
