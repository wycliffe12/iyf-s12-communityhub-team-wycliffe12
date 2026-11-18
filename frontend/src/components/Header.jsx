
function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h2>CommunityHub</h2>
      </div>

      <div className="header-search">
        <input
          type="text"
          placeholder="Search communities..."
        />
      </div>

      <div className="header-profile">
        <span>Welcome!</span>
        <div className="profile-avatar">U</div>
      </div>
    </header>
  );
}

export default Header;
