import React from "react";
function Search({setSearch}) {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder="Type a Description"
          onChange={(e) => setSearch(e.target.value)}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }

  export default Search