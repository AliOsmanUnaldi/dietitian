import React from 'react';
import BlogList from "./BlogList";
import blogs from "./blogs.json";

const Blogs = () => {
    if (!blogs || blogs.length === 0) {
        return (
            <div className="home">
                <p>No blogs available.</p>
            </div>
        );
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
        </div>
    );
};

export default Blogs;