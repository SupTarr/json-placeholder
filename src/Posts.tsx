import { useEffect, useState } from "react";
import { Post } from "./types/Post";
import { Api, API_BASE_URL } from "./Api";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const [posts, error] = await Api(API_BASE_URL + "/posts");
      if (error) {
        console.log(`>> error: ${(error as Error).message}`);
        return;
      }
      setPosts(posts);
    })();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={`post-${post.id}`} className="hover">
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
