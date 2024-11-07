import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data));
  }, []);

  return (
    <div>
      <h2>Feed</h2>
      {posts.map(post => (
        <div key={post._id}>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
