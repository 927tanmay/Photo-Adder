import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <div className="grid-photo-wrap">
        <Link to={`/single/${post.id}`}>
          {" "}
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        <div class="middle">
          <div
            style={{ fontFamily: 'billabong,"billabongregular"' }}
            class="text"
          >
            {post.description}
          </div>
        </div>
      </div>
      <figcaption>
        <p style={{ fontFamily: 'billabong,"billabongregular"' }}>
          {post.description}
        </p>
        <div className="button-container">
          <button
            onClick={() => {
              props.removePost(props.index);
              props.history.push("/");
            }}
          >
            <span> Remove </span>
          </button>
          <Link className="button" to={`/single/${post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"> </div>
              {props.comments[post.id] ? props.comments[post.id].length : 0}
            </div>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
}

Photo.propTypes = {
  post: PropTypes.object.isRequired
};

export default Photo;
