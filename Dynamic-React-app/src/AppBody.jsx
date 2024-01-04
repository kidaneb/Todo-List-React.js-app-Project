import { useContext } from "react";
import { Contexts } from "./App";
export function AppBody({children}){
    const editStyle = { opacity: 0.2, zIndex: 0 };
    const {isEditing, isDarkMode} = useContext(Contexts);
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