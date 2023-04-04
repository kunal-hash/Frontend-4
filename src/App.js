import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Details from "./Components/Details";
import PostsProvider from "./PostsProvider";

const App = () => {
  return (
    <PostsProvider>
      <Router>
        <h3 className="text-center my-2">Welcome</h3>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element = { <Details/>} />
        </Routes>
      </Router>
    </PostsProvider>
  );
};

export default App;
