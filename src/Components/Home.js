import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PostsContext from "../PostsContext";
import "../App.css";

const Home = () => {
  const posts = useContext(PostsContext);

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <div className="card">
              <div className="kunal">
                <Link
                  className="text-dark text-decoration-none seg"
                  to={`/item/${post.id}`}
                >
                  <img
                    className="card-image-top img-fluid fluid-widths mx-auto d-block image"
                    src={`https://picsum.photos/200?random=${post.id}`}
                    alt={post.title}
                    
                  ></img>
                  <div className="card body">
                    <h5 className="card-title">
                      Title : {post.title.slice(0, 20)}...
                    </h5>
                    <p className="card-text">
                      Body : {post.body.slice(0, 50)}
                      <span className="text-bold text-danger"> Read More...</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home