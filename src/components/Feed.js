import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../redux/reducer"
import PostDisplay from './PostDisplay/PostDisplay'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userInput: ""
    };
  }

  componentDidMount() {
    if (this.props.user === {}) {
      axios.get("/api/user").then(res => {
        if (res.data) {
          this.props.getUser(res.data);
        } else {
          this.props.history.push("/");
        }
      });
    }
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get(`/api/posts/${this.props.user.user_id}`)
      .then(res => {
        this.setState({ posts: [...res.data] });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = () => {
    axios
      .post(`/api/posts/${this.props.user.user_id}`, {
        post: this.state.userInput
      })
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  handleEdit = (post_id, text) => {
    axios
      .put(`/api/posts/${post_id}`, { text })
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  handleDelete = post_id => {
    console.log("fired: post id", post_id);
    axios
      .delete(`/api/posts/${post_id}`)
      .then(() => {
        this.getPosts();
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.posts);
    let mappedPosts;
    if (this.state.posts[0]) {
      mappedPosts = this.state.posts.map((post, index) => {
        return (
          <PostDisplay
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            key={index}
            post={post}
          />
        );
      });
    } else {
      mappedPosts = <div>Be the first to post!</div>;
    }
    return (
      <>
        <div className="dashboard-input">
          <textarea
            id="new-post"
            cols="60"
            rows="2"
            placeholder="New post..."
            value={this.state.userInput}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <button onClick={this.handleClick} className="input-container-button">
            Post
          </button>
        </div>

        <section className="app-body">
          <div className="padding"></div>
          <ul className="flex-vertical-center post-feed">{mappedPosts}</ul>
        </section>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps, { getUser })(Dashboard);