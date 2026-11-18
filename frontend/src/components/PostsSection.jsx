import { useState } from 'react';
import PostList from './PostList';
import CreatePost from './CreatePost';

function PostsSection() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost) => {
    setPosts((previousPosts) => [newPost, ...previousPosts]);
  };

  return (
    <section>
      <CreatePost onAddPost={handleAddPost} />
      <PostList posts={posts} />
    </section>
  );
}

export default PostsSection;