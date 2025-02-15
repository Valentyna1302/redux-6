import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  // useNavigate,
  useParams,
} from "react-router-dom";
import { fetchUserById } from "../services/api";

const UserDetails = () => {
  const { userId } = useParams();
  // const navigate = useNavigate(); у деяких ситуаціях
  const [user, setUser] = useState(null);
  const location = useLocation();
  console.log(location);
  const goBackUrl = useRef(location?.state ?? "/users"); // у рефа завжди є current

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to={goBackUrl.current}>Go back</Link>
      UserDetails #{userId}
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <nav>
        <Link to="info">Info</Link>
        <Link to="posts">Posts</Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default UserDetails;
