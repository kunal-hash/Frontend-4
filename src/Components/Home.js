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
          <div className="col-md-3" key={post.id}>
            <div className="card">
              <div className="abhi">
                <Link
                  className="text-dark text-decoration-none"
                  to={`/item/${post.id}`}
                >
                  <img
                    className="card-image-top"
                    src={`https://picsum.photos/200?random=${post.id}`}
                    alt={post.title}
                  ></img>
                  <div className="card body">
                    <h5 className="card-titl">
                      Title : {post.title.slice(0, 20)}...
                    </h5>
                    <p className="card-text">
                      Body : {post.body.slice(0, 50)}
                      <span className="text-primary"> Read More...</span>
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