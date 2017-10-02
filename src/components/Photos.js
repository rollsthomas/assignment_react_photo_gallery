import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

export const Photos = props => {
  const cards = props.data.map((card, i) => {
    return <Card key={card.id} data={card} />;
  });
  return (
    <div id="photos">
      <p id="photo-count">Photos Found:{props.data.length}</p>
      <section>{cards}</section>
    </div>
  );
};

Photos.protoTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  filter: PropTypes.func.isRequired
};
export default Photos;
