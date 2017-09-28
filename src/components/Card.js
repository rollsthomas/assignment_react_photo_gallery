import React, { Component } from "react";

const Card = props => {
  return (
    <figure className="card">
      <img src="" alt="Photo" />
      <div className="cardInfo">
        <p>Name</p>
        <p>Date</p>
        <figcaption>Comment</figcaption>
      </div>
    </figure>
  );
};

export default Card;
