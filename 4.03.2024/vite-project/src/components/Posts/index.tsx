import React, { useState, useEffect, ChangeEvent } from 'react';

interface Post {
    title:String
    content:String
    authorEmail:String
}

const Posts: React.FC = () => {
  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/post')
      .then((response) => response.json())
      .then((data: Post[]) => setPost(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h3>{post.authorEmail}</h3>
        </div>
      ))}
    </div>
  );
};


export default Posts;
