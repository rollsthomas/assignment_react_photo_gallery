import React from "react";
import PropTypes from "prop-types";

/*
const {
    data.created_time: created_time,
    data.link: link,
    data.images.low_resolution.url: img_url,
    data.user.username: username,
  } = props;
*/

const Card = props => {
  //let created_time = props.data.created_time;
  const {
    data: { created_time },
    data: { link },
    data: { images: { low_resolution: { url: imgUrl } } },
    data: { user: { username } }
  } = props;
  let date = new Date(created_time * 1000);
  let uploadDate = date.toDateString();
  return (
    <figure className="card">
      <a href={link}>
        <img src={imgUrl} alt="Photo" />
      </a>
      <div className="card-info">
        <p className="card-name">{username}</p>
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
