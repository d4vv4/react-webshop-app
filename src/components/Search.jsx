import React from "react";

const Search = ({ handleSearchChange }) => {
  return (
    <>
      <input
        className="form-control w-50 mx-auto mb-5"
        type="text"
        onChange={handleSearchChange}
        placeholder="Sök"
      ></input>
    </>
  );
};
export default Search;
