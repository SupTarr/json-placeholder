import { useEffect, useState } from "react";
import { User, getAddressStringFromUser } from "./types/User";
import { Api, API_BASE_URL } from "./Api";
import { Loading, Size } from "./Loading";
import { Alert, AlertType } from "./Alert";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const [users, error] = await Api(API_BASE_URL + "/users");
      if (error) {
        console.log(`>> error: ${(error as Error).message}`);
        setError(error);
        setIsLoading(false);
        return;
      }
      setUsers(users);
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
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={`user-${user.id}`} className="hover">
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{getAddressStringFromUser(user)}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.company.name}</td>
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

export default Users;
