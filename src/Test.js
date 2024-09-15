import React from 'react';
import blogs from './blogs.json';

const Test = () => {
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div key={blog.id} className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>{blog.body.substring(0, 100)}...</p> {/* Blog body kısmının bir bölümünü göster */}
                    <a href={`/blogs/${blog.id}`}>Devamını oku</a>
                </div>
            ))}
        </div>
    );
};

export default Test;
