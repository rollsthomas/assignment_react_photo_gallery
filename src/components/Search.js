import React, { Component } from "react";

const Search = props => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          value=""
          name="search"
          placeholder="Search by name or keyword"
        />
        <input type="button" value="Search" />
      </form>
    </section>
  );
};

export default Search;
