
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";

function CreatePost() {
  const [posts, setPosts] = useLocalStorage("communityPosts", []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body,
      userId: 1,
    };

    setPosts((previousPosts) => [...previousPosts, newPost]);

    setTitle("");
    setBody("");

    navigate("/posts");
  }

  return (
    <>
      <Header />

      <main className="main-content">
        <h1>Create a Post</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Post Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              minLength={3}
            />
          </div>

          <div>
            <label htmlFor="body">Post Content</label>
            <textarea
              id="body"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              required
              minLength={5}
              rows="5"
            />
          </div>

          <button type="submit">Publish Post</button>
        </form>

        <p>
          <Link to="/posts">View Community Posts</Link>
        </p>
      </main>

      <Footer />
    </>
  );
}

export default CreatePost;
