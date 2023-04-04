import React, { useState, useEffect } from "react";
import PostsContext from "./PostsContext";

const PostsProvider = ({ children }) => {
    const[posts,setPosts] = useState([])


useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data => setPosts(data)))
        .catch((error) => console.log(error));
}, []);


return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
);
};

export default PostsProvider;

