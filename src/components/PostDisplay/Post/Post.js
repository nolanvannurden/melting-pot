
import React from "react";

const Post = props => {
  return (
    <li className="post-container">
      <div>
        <p className="post-text">{props.text}</p>
      </div>
      <div className="post-buttons">
        <button
          className="input-container-button-small"
          onClick={() => {
            props.toggleEdit();
          }}
        >
          Edit
        </button>
        <button
          className="input-container-button-small"
          onClick={() => props.handleDelete(props.id)}
        >
          Delete
        </button>
        <span className="date-span">{props.time}</span>
      </div>
    </li>
  );
};

export default Post;