import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function PostDetails() {
  const { post_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [postDetail, setPostDetail] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
      .then((resp) => {
        console.log("resp", resp);
        setPostDetail(resp.data.body);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log("The error is", err);
        setIsLoading(false);
        setIsError(true);
      });
  }, [post_id]);

  return (
    <div>
      {!isLoading ? (
        <div className="post-container">
          <div className="title">{`Post Details : ${post_id}`}</div>
          {!isError ? (
            <div>{postDetail}</div>
          ) : (
            <div>Error in fetching posts</div>
          )}
        </div>
      ) : (
        <div>Loading Post Detail ...</div>
      )}
    </div>
  );
}
