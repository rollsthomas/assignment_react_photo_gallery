import React, { Component } from "react";
import Card from "./Card";
export const Photos = props => {
  return (
    <section>
      <p id="photo-count">100</p>
      <div id="photos-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Photos;
