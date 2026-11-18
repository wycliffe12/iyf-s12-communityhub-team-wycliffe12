import { useState } from 'react';

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title,
      content: content,
      author: 'Justin',
      date: new Date().toLocaleDateString()
    };

    onAddPost(newPost);

    setTitle('');
    setContent('');
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <h2>Create a Post</h2>

      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Publish Post</button>
    </form>
  );
}

export default CreatePost;