export function TodoFilter(){
    return(
        <>
        <div className="filter-input-container">
          <input type="text" placeholder="search todos" className="filter-input" />
          <div className="filter-child">
            <span className="filter-error">error just happen todos not found</span>
            
              <div className="check-filter">
                <label >completed</label>
                <input type="checkbox" />
            </div>
          </div>
        </div>
        </>
    )
}