/* An alternative method to get props
const BlogList = (props) => {
    const blogs = props.blogs
    // or
    const {blogs} = props; // If we like destructuring
    // That said if you have that kind of excitement for destructuring you could do what I did below
}
*/

const BlogList = ({ title, blogs, handleDelete }) => {
    const blogTemplateBuilder = (blog) => {
        return (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={(e) => handleDelete(blog.id)}>delete</button>
            </div>
        )
    }

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blogTemplateBuilder)}
        </div>
    );
}

export default BlogList;