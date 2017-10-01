import React, { Component } from "react";
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

export default Photos;
/****************************
const cards = props.data.map((card, i, imgArr) => {
    if (props.filter === "all") {
      return <Card key={card.id} data={card} />;
    } else if (card.filter === props.filter) {
      return <Card key={card.id} data={card} />;
    }
  });
*****************************/
