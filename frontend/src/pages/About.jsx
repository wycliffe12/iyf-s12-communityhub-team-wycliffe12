
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function About() {
  return (
    <>
      <Header />

      <main className="main-content">
        <h1>About CommunityHub</h1>

        <p>
          CommunityHub is a community networking platform
          designed to connect people.
        </p>

        <h2>Our Mission</h2>

        <p>
          To create a platform where people can communicate,
          share information, exchange ideas and support
          one another.
        </p>

        <h2>Our Vision</h2>

        <p>
          To build a connected and supportive digital
          community.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;
