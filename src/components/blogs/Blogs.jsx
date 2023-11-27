import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmark}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1>Blogs : {blogs.length}</h1>
            <div>
            {
                blogs.map(blog =>
                    <Blog key={blog.id}
                    handleAddToBookmark={handleAddToBookmark}
                    blog={blog}></Blog>
                )
            }
            </div>
        </div>
    );
};

export default Blogs;