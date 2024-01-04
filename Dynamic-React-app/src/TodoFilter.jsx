import { useContext, useState } from "react";
import { Contexts } from "./App";
export function TodoFilter() {
  const {
    filterText,
    setFilterText,
    isError,
    hideComplete,
    setHideComplete,
    isDarkMode,
  } = useContext(Contexts);
  return (
    <>
      <div className="filter-input-container">
        <input
          type="text"
          placeholder="search todos"
          className={isDarkMode ? `filter-input-dark` : `filter-input`}
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="filter-child">
          {isError ? (
            <span className="filter-error">
              error just happen todos not found
            </span>
          ) : null}

          <div className={isDarkMode ? `check-filter-dark` : `check-filter`}>
            <label>Hide completed</label>
            <input
              type="checkbox"
              checked={hideComplete}
              onChange={(e) => setHideComplete(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
