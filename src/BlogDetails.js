import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams(); 
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);

    return (<div className="blog-details">
        {isPending && <div>Loading..</div>}
        {error && <div> {error.name} </div>}
        {blog && (
            <article>
                <h2> {blog.title} </h2>
                <p>Written by {blog.author}</p>
                <img src="https://scontent.fesb6-1.fna.fbcdn.net/v/t39.30808-6/459982726_1589702011583564_3547476891107565842_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=S0uwJknqwI8Q7kNvgHQa7Q4&_nc_ht=scontent.fesb6-1.fna&oh=00_AYCqiz4UY1ZJte8CJ8nBYFdkBTK2vQfPzpSNpOd1eWfPUw&oe=66EBA9EA" alt="resim" />
                <div> {blog.body} </div>
                </article>
        )
        }
    </div>);
}

export default BlogDetails;