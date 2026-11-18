function PostCard({ title, content, author, date }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{content}</p>

      <div className="post-meta">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}

export default PostCard;