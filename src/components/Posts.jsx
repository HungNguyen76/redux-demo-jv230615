import { useState, useEffect } from "react";
import api from "@api";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [postDetail, setPostDetail] = useState({});
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const postData = await api.post.findPostAll();
      const postDetail = await api.post.findPostById(3);
      const userData = await api.user.findUserAll();
      setPosts(postData.data);
      setUserInfo(userData.data);
      setPostDetail(postDetail.data);
    }
    fetchData();
  }, []);
  const handleDelete = async (postId) => {
    const newPost = await api.post.deleteById(postId);
    setPosts(newPost);
    return {
      postId: postId,
      data: newPost.data
    }
  };
  return (
    <div>
      <h1>Fake API with Json-server</h1>
      <h3>list post with findPostAll method</h3>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            {item.title} - {item.author}
          </li>
        ))}
      </ul>
      <h3>list user with findUserAll method</h3>
      <ul>
        {userInfo.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h3> get post detail with postId</h3>
      <ul>
        <li key={postDetail.id}>
          {postDetail.title} - {postDetail.author}
        </li>
      </ul>
      <button onClick={() => handleDelete(2)}>Delete Post</button>
    </div>
  );
}
