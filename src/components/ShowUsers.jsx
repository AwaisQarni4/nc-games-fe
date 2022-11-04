import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = ({ userName }) => {
  const { setUser } = useContext(UserContext);
  return (
    <h3
      onClick={() => {
        setUser(userName.username);
      }}
    >
      {userName.username}
    </h3>
  );
};

export default UserCard;
