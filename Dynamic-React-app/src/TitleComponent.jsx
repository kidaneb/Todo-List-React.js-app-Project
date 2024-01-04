import { useContext } from "react";
import { Contexts } from "./App";

export function TitleComponent() {
  const { isDarkMode, toggleDarkMode } = useContext(Contexts);

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
