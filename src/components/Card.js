import React from "react";
import PropTypes from "prop-types";

const Card = props => {
  let date = new Date(props.data.created_time * 1000);
  let uploadDate = date.toDateString();
  return (
    <figure className="card">
      <a href={props.data.link}>
        <img src={props.data.images.low_resolution.url} alt="Photo" />
      </a>
      <div className="card-info">
        <p className="card-name">{props.data.user.username}</p>
        <p className="card-date">{uploadDate}</p>
      </div>

      <figcaption>
        Comment: {props.data.caption === null ? "" : props.data.caption.text}
      </figcaption>
    </figure>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired
};

export default Card;
