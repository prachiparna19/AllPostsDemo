import "./styles.css";
import React from "react";
import PostDetails from "./postDetails";
import AllPosts from "./AllPosts";
import { Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={AllPosts} />
      <Route path="/:post_id" component={PostDetails} />
    </BrowserRouter>
  );
}
