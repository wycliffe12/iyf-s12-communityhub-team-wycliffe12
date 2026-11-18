
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-layout">
        <Sidebar />

        <main className="main-content">
          <h1>Welcome to CommunityHub</h1>
          <p>
            Connect, share ideas, and grow together
            with your community.
          </p>

          <section className="welcome-section">
            <h2>What's happening in your community?</h2>
            <p>
              Stay connected with people, share your
              thoughts, and discover new ideas.
            </p>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
