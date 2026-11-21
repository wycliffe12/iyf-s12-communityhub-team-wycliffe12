
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h2>CommunityHub</h2>
      </div>

      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/create-post">Create Post</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <div className="header-profile">
        <span>Welcome!</span>
        <div className="profile-avatar">U</div>
      </div>
    </header>
  );
}

export default Header;
