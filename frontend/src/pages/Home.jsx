
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useFetch from "../hooks/useFetch.js";

function Home() {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      <Header />

      <main className="main-content">
        <h1>Welcome to CommunityHub</h1>

        <p>Connect, share ideas, and grow together.</p>

        <section>
          <h2>Discover our community</h2>

          <p>Explore discussions and share your thoughts.</p>

          <Link to="/posts">Explore Posts</Link>
          {" | "}
          <Link to="/create-post">Create a Post</Link>
        </section>

        <section>
          <h2>Recent Posts</h2>

          {loading && <p>Loading posts...</p>}

          {error && <p role="alert">Error: {error}</p>}

          {!loading && !error && (
            <ul>
              {posts.slice(0, 5).map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
