import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "The title of A new book react ",
      body: "Tells about react and how it works",
      author: "Dhruv Raithee",
      id: 0,
    },
    {
      title: "ReactJs",
      body: "Tells about react and how it works",
      author: "Dhruv Raithee",
      id: 1,
    },
    {
      title: "NodeJS",
      body: "Tells about NodeJs and how it works",
      author: "Raikee",
      id: 2,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog)
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
