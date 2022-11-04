import { useEffect } from "react";
import { useState } from "react";
import UserCard from "./ShowUsers";
// import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [isLodaing, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://awais-game-data.herokuapp.com/api/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        setIsLoading(false);
        setUsers(users);
      });
  }, []);

  if (isLodaing) return <h2>Hang on to your seat..!!</h2>;
  return (
    <ul>
      {users.map((user) => {
        return <UserCard key={user.username} userName={user} />;
      })}
    </ul>
  );
};

export default Users;
