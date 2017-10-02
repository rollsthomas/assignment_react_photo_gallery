import React from "react";
import PropTypes from "prop-types";

const Filter = props => {
  let handleChange = e => {
    props.filterSelected(e.target.value);
  };
  return (
    <section className="filter">
      <form>
        <p>Filter By:</p>
        <select name="filter-options" onChange={handleChange}>
          <option value="all">All</option>
          <option value="Normal">Normal</option>
          <option value="Lark">Lark</option>
          <option value="Reyes">Reyes</option>
          <option value="Valencia">Valencia</option>
          <option value="Inkwell">Inkwell</option>
          <option value="Ludwig">Ludwig</option>
        </select>
      </form>
    </section>
  );
};

Filter.propTypes = {
  filterSelected: PropTypes.func.isRequired
};

export default Filter;
