import React from "react";
class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postInput: props.text
    };
  }

  handleCancel = () => {
    this.setState({ postInput: this.text });
    this.props.toggleEdit();
  };

  handleChange = e => {
    this.setState({ postInput: e.target.value });
  };

  render() {
    return (
      <li className="post-container">
        <div>
          <input
            className="post-text"
            value={this.state.postInput}
            onChange={this.handleChange}
          />
        </div>
        <div className="post-buttons">
            <button
              className="input-container-button-small"
              onClick={() => {
                this.handleCancel();
              }}
            >
              Cancel
            </button>
            <button
              className="input-container-button-small"
              onClick={() => {
                this.props.handleEdit(this.props.id, this.state.postInput);
                this.props.toggleEdit();
              }}
            >
              Save
            </button>
        </div>
      </li>
    );
  }
}

export default Edit;