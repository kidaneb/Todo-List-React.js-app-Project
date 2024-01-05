import { useContext, useEffect } from "react";
import { ThemeContext } from "./App";

export function TitleComponent({ toggleDarkMode }) {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <button
        className={isDarkMode ? `toggle-btn-dark` : `toggle-btn`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? `light` : `dark`}
      </button>
      <div className={isDarkMode ? `title-dark` : `title`}>
        <h1 className="title-text">TODO-LIST APP</h1>
      </div>
    </>
  );
}
