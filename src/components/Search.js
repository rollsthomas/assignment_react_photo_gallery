import React from "react";
import PropTypes from "prop-types";

const Search = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.searchPhotos(props.searchVal);
  };
  const handleChange = e => {
    props.searchInput(e.target.value);
  };
  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={props.searchVal}
          name="search"
          placeholder="Search by name or keyword"
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </section>
  );
};

Search.propTypes = {
  searchVal: PropTypes.string,
  searchInput: PropTypes.func.isRequired,
  searchPhotos: PropTypes.func.isRequired
};

export default Search;
