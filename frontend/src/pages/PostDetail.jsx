
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useFetch from "../hooks/useFetch.js";

function PostDetail() {
  const { id } = useParams();

  const { data: post, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <>
      <Header />

      <main className="main-content">
        <Link to="/posts">← Back to Posts</Link>

        <h1>Post Details</h1>

        {loading && <p>Loading post...</p>}

        {error && <p role="alert">Error: {error}</p>}

        {!loading && !error && post && post.id && (
          <article className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>Post ID: {post.id}</p>
            <p>Author ID: {post.userId}</p>
          </article>
        )}

        {!loading && !error && !post?.id && (
          <p>Post not found.</p>
        )}
      </main>

      <Footer />
    </>
  );
}

export default PostDetail;
