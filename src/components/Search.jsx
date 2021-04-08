import React from "react";

const Search = ({ handleSearchChange }) => {
  return (
    <>
      <input type="text" onChange={handleSearchChange}></input>
    </>
  );
};
export default Search;
