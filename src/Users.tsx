import { useEffect, useState } from "react";
import { User } from "./types/User";
import { Api, API_BASE_URL } from "./Api";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const [users, error] = await Api(API_BASE_URL + "/users");
      if (error) {
        console.log(`>> error: ${(error as Error).message}`);
        return;
      }
      setUsers(users);
    })();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
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
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
