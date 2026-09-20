import { useState } from "react";
function SearchBar() {
   const [showFilters, setShowFilters] = useState(false);

  return (

    <section className="search-section">
      <div className="search-body">
       

        <input className="search-box"
          type="text"
          placeholder="Search heroes by name, story, or impact area..."
        />
        <button
        className="filter-button"
        onClick={() => setShowFilters(!showFilters)}
      >
         Show Filters
      </button>
      </div>


    </section>
  );
}

export default SearchBar;