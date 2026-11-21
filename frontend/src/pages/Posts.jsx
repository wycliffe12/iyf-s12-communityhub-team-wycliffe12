
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useFetch from "../hooks/useFetch.js";
import useLocalStorage from "../hooks/useLocalStorage.js";

function Posts() {
  const { data: apiPosts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [localPosts] = useLocalStorage("communityPosts", []);

  const allPosts = [...localPosts, ...apiPosts];

  return (
    <>
      <Header />

      <main className="main-content">
        <h1>Community Posts</h1>

        <Link to="/create-post">+ Create New Post</Link>

        {loading && <p>Loading posts...</p>}

        {error && (
          <p role="alert">Unable to load online posts: {error}</p>
        )}

        {!loading && !error && allPosts.length === 0 && (
          <p>No posts available yet.</p>
        )}

        <section className="posts-grid">
          {allPosts.map((post) => (
            <article className="post-card" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>

              {localPosts.some((item) => item.id === post.id) && (
                <small>Your post</small>
              )}

              <p>
                <Link to={`/posts/${post.id}`}>Read More</Link>
              </p>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Posts;
