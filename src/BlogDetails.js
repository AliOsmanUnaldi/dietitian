import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogData from './blogs.json';

const BlogDetails = () => {
    const { id } = useParams(); 
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = blogData.find(blog => blog.id === parseInt(id));
        setBlog(foundBlog);
    }, [id]);

    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
            {blog ? (
                <article>
                    <h2> {blog.title} </h2>
                    <img src={blog.image} alt="resim"/>
                    <div> {blog.body} </div>
                </article>
            ) : (
                <div>Blog not found</div>
            )}
        </div>
    );
};

export default BlogDetails;
