import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const url = "http://localhost:8000/blogs"
    const { data: blogs, isPending, error } = useFetch(url);

    const featuredBlogger = ((blogs) => {
        if (!blogs || blogs.length === 0) {
            return ""
        }
        const kv = blogs
            .map(b => b.author)
            .reduce((acc, cur) => { cur in acc ? acc[cur] += 1 : acc[cur] = 1; return acc }, {})
        return Object.keys(kv).reduce((a, b) => kv[a] > kv[b] ? a : b, "")
    })(blogs)

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div> Loading ... </div>}
            {blogs && <div className="content">
                <BlogList
                    title="All the Blogs!"
                    blogs={blogs}
                />
                <BlogList
                    title={`Featured Blogger of the Month ${featuredBlogger}`}
                    blogs={blogs.filter(b => b.author === featuredBlogger)}
                />
            </div>}
        </div>
    );
}

export default Home;