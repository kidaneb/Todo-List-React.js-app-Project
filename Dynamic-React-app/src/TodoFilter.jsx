export function TodoFilter(){
    return(
        <>
        <div class="filter-input-container">
          <input type="text" placeholder="search todos" class="filter-input" />
          <div class="filter-child">
            <span class="filter-error">error just happen todos not found</span>
            
              <div class="check-filter">
                <label >completed</label>
                <input type="checkbox" />
            </div>
          </div>
        </div>
        </>
    )
}