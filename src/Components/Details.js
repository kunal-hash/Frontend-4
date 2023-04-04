import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostsContext from "../PostsContext";

const Details = () => {
  const { id } = useParams();
  const posts = useContext(PostsContext);
    const post = posts.find((post) => post.id === parseInt(id));
    
    console.log(posts)
    console.log(post)
    
    

  if (!post) {
    return <div>The Requested item do not exists.</div>;
  }

  return (
    <div className="container">
      <div className="card" style={{ width: "20rem" }}>
        <h3 className="card-header">
          Details Page for the Post with Id - {post.id}
        </h3>
        <img
          className=""
          src={`https://picsum.photos/200?random=${post.id}`}
          alt="detailimage"
        ></img>
        <div className="card-body">
          <h4 className="card-title">Title : {post.title}</h4>
          <p className="card-text">Body : {post.body}</p>
        </div>
        <ul className="list-group">
          <li className="list-group-item">Created by : {post.userId}</li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
