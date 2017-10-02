import React, { Component } from "react";

const Filter = props => {
  let handleChange = e => {
    props.filterSelected(e.target.value, props.data);
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

export default Filter;
