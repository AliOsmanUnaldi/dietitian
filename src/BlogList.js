import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {

    return (
        <div className="container">
            <div className="blog-list">
                {blogs.map(blog => (
                    <div className="blog-preview" key={blog.id} >
                        <img src={blog.image} alt="resim" />
                        <h2>{blog.title}</h2>
                        <div className="caption">
                            <Link to={`/dietitian/blogs/${blog.id}`}>
                            <h2>Makaleyi oku</h2>
                        </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;