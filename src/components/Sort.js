import React from "react";
import PropTypes from "prop-types";

const Sort = props => {
  let clickHandler = e => {
    if (e.target.className == "down") {
      e.target.className = "up";
    } else e.target.className = "down";
    props.sorting(e.target.value, props.data, e.target.className);
  };
  return (
    <section className="sort">
      <form>
        <p>Sort By:</p>
        <input
          type="button"
          className="up"
          value="Date"
          onClick={clickHandler}
        />
        <input
          type="button"
          className="up"
          value="Name"
          onClick={clickHandler}
        />
      </form>
    </section>
  );
};

Sort.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  sorting: PropTypes.func.isRequired
};

export default Sort;
