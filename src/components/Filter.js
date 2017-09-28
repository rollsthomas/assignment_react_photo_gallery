import React, { Component } from "react";

const Filter = props => {
  return (
    <section className="filter">
      <form id="filter-form">
        <p>Sort By:</p>
        <input type="button" value="Date" />
        <input type="button" value="Name" />
        <input type="button" value="Search" />
      </form>
    </section>
  );
};

export default Filter;
