import { useState } from "react";

export function TodoFilter({
  filterText,
  setFilterText,
  isError,
  hideComplete,
  setHideComplete,
}) {
  return (
    <>
      <div className="filter-input-container">
        <input
          type="text"
          placeholder="search todos"
          className="filter-input"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="filter-child">
          {isError ? (
            <span className="filter-error">
              error just happen todos not found
            </span>
          ) : null}

          <div className="check-filter">
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
