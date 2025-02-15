import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const UserPosts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchPostsByUserId(userId);
      setPosts(data);
    };
    getData();
  }, [userId]);
  return (
    <div>
      <h2>User posts information:</h2>
      <ul>
        {posts.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default UserPosts;
