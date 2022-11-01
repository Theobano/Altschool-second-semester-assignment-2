import React from "react";
import "./buttons.css"

export function PaginationButton({ className, pageNumber, onClick }) {
  return (
    <button className={"pagination-button " + className} onClick={onClick}>
      {pageNumber}
    </button>
  );
}

export function ToggleThemeButton() {
  return (
      <div className="">
      <button
        className="toggle-theme-button"
        onClick={() => {
          const app = document.getElementById("app");
          app.classList.toggle("dark");
        }}
      >
        Toggle<br/>Theme
      </button>
    </div>
  );
}
