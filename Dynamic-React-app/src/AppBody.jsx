import { useContext } from "react";
import { ThemeContext } from "./App";
export function AppBody({children,isEditing}){
  const editStyle = { opacity: 0.2, zIndex: 0 };
    const {isDarkMode} = useContext(ThemeContext);
    return(
        <div
        className={isDarkMode ? `body-dark` : `body`}
        style={{ ...(isEditing ? editStyle : {}), position: "relative" }}
      >
        {isEditing ? <div className="overlay"></div> : null}

        {children}
      </div>
    )
}