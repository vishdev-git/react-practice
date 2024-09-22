import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isLoading, setLoader] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true); 
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("New Blog added:", blog);
        setLoader(false); 
        history.push('/')
      })
      .catch((err) => {
        console.error("Error adding blog:", err);
        setLoader(false); 
        
      });
  };

  return (
    <div className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <label>Author Name:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Vish">Vish</option>
          <option value="Viswanath">Viswanath</option>
        </select>
        <button  disabled={isLoading}>
          {isLoading ? "Adding Blog..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default Create;
