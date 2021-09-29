import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllPosts() {
  const [listItems, setListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        console.log("resp", resp);
        setListItems(resp.data.slice(0, 20));
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log("The error is", err);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return (
    <div className="App">
      <h1 data-testid="title">All Posts</h1>
      <div className="list-container">
        {isError ? <div>Error in fetching posts</div> : null}
        {!isLoading ? (
          listItems &&
          listItems.length > 0 &&
          listItems.map((item, index) => {
            return (
              <div>
                {!isError && (
                  <div
                    key={index}
                    className="list-items"
                    data-testid={`list-item-${index}`}
                  >
                    <Link to={"/" + item.id}>
                      <div
                        className="post-title"
                        data-testid={`post-title-${index}`}
                      >
                        {item.title}
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>Loading Data...</div>
        )}
      </div>
    </div>
  );
}
