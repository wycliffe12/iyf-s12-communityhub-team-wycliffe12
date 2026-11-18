import './Posts.css';
import PostCard from './PostCard';

function PostList({ posts }) {
  return (
    <section className="post-list">
      <h2>Community Posts</h2>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </section>
  );
}

export default PostList;