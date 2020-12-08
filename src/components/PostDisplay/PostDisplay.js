import React from "react";
import Post from "./Post/Post"
import Edit from "./Edit";

class PostDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
	}
	
	handleCancel = () => {
    this.setState({ postInput: this.text });
    this.props.toggleEdit();
  };

  handleChange = e => {
    this.setState({ postInput: e.target.value });
  };
  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const { text, post_id, p_time } = this.props.post;
    const { handleDelete, handleEdit } = this.props;
    return (
      <>
        {this.state.isEditing ? (
          <Edit
            id={post_id}
            text={text}
            time={p_time}
            toggleEdit={this.toggleEdit}
            handleEdit={handleEdit}
          />
        ) : (
          <Post
            id={post_id}
            text={text}
            time={p_time}
            toggleEdit={this.toggleEdit}
            handleDelete={handleDelete}
          />
        )}
      </>
    );
  }
}

export default PostDisplay;