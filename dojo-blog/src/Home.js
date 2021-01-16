import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const featuredBlogger = ((blogs) => {
        const kv = blogs
            .map(b => b.author)
            .reduce((acc, cur) => { cur in acc ? acc[cur] += 1 : acc[cur] = 1; return acc }, {})
        return Object.keys(kv).reduce((a, b) => kv[a] > kv[b] ? a : b, "")
    })(blogs)

    const handleDelete = (id) => {
        const nextBlogs = blogs.filter(b => b.id !== id)
        setBlogs(nextBlogs)
    }
    
    useEffect( () => {
        console.log("Initial Load")
        console.log("Fetching Data")
        fetch("http://localhost:8000/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="home">
            <BlogList
                title="All the Blogs!"
                blogs={blogs}
                handleDelete={handleDelete}
            />
            <hr />
            <BlogList
                title={`Featured Blogger of the Month ${featuredBlogger}`}
                blogs={blogs.filter(b => b.author === featuredBlogger)}
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default Home;