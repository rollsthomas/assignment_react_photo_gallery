import React from "react";
import PropTypes from "prop-types";

const Search = props => {
  const { searchPhotos: Photos, searchVal: val, searchInput: input } = props;
  const handleSubmit = e => {
    e.preventDefault();
    Photos(val);
  };
  const handleChange = e => {
    input(e.target.value);
  };
  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={val}
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
