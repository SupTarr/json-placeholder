import { useEffect, useState } from "react";
import { Comment } from "./types/Comment";
import { Api, API_BASE_URL } from "./Api";

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    (async () => {
      const [comments, error] = await Api(API_BASE_URL + "/comments");
      if (error) {
        console.log(`>> error: ${(error as Error).message}`);
        return;
      }
      setComments(comments);
    })();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>Post ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => {
            return (
              <tr className="hover">
                <th>{comment.id}</th>
                <td>{comment.postId}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
