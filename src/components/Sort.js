import React, { Component } from "react";

const Sort = props => {
  return (
    <section className="sort">
      <form>
        <p>Sort By:</p>
        <input type="button" className="down" value="Date" />
        <input type="button" className="down" value="Name" />
        <input type="button" className="down" value="Search" />
      </form>
    </section>
  );
};

export default Sort;
