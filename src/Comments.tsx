import { useEffect, useState } from "react";
import { Comment } from "./types/Comment";
import { Api, API_BASE_URL } from "./Api";
import { Loading, Size } from "./Loading";
import { Alert, AlertType } from "./Alert";

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const [comments, error] = await Api(API_BASE_URL + "/comments");
      if (error) {
        console.log(`>> error: ${(error as Error).message}`);
        setError(error);
        setIsLoading(false);
        return;
      }
      setComments(comments);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading && <Loading size={Size.Large} />}
      {!isLoading && error && (
        <Alert type={AlertType.Error} message={error.message} />
      )}
      {!isLoading && !error && (
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
                  <tr key={`comment-${comment.id}`} className="hover">
                    <td>{comment.id}</td>
                    <td>{comment.postId}</td>
                    <td>{comment.name}</td>
                    <td>{comment.email}</td>
                    <td className="min-w-[250px]">{comment.body}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Comments;
