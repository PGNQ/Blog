import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPost, deletePost } from "../actions";
import {Link} from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    console.log('componentDidMount')
  }

  onDeleteClick() {
     const { id } = this.props.match.params;
     this.props.deletePost(id, () => {
       this.props.history.push("/");
     });
   }

render() {
    console.log('render');
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps){
    console.log('mapStateToProps');
    return { post: posts[ownProps.match.params.id] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
