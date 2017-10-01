import React, { Component } from "react";

const Sort = props => {
  let clickHandler = e => {
    if (e.target.className == "down") {
      e.target.className = "up";
    } else e.target.className = "down";
  };
  return (
    <section className="sort">
      <form>
        <p>Sort By:</p>
        <input
          type="button"
          className="down"
          value="Date"
          onClick={clickHandler}
        />
        <input
          type="button"
          className="down"
          value="Name"
          onClick={clickHandler}
        />
        <input
          type="button"
          className="down"
          value="Search"
          onClick={clickHandler}
        />
      </form>
    </section>
  );
};

export default Sort;
