import { useEffect, useState } from "react";
import { Api, API_BASE_URL } from "./Api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const [users, error] = await Api(API_BASE_URL + "/users");
      if (error) {
        console.log(`>> error: ${(error as Error).message}`);
        return;
      }
      setUsers(users)
    })();
  }, []);

  console.log(">> users: ", users)

  return <div>User</div>;
};

export default Users;
