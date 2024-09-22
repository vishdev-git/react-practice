import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";


const BlogDetails = () => {
 
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  
  const history = useHistory()

  const handleDelete = ()=>{
   

    fetch("http://localhost:8000/blogs"+data.id, {
      method: "DELETE",
    })
      .then(() => {
        history.push('/')
      })
      .catch((err) => {
        console.error("Error deleting blog:", err);
   
        
      });
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div className="article">
          <h2>{data.title}</h2>
          <p>Written By : {data.author}</p>
          <div>{data.body}</div>
          <button onClick={handleDelete}>Delete Blog</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
