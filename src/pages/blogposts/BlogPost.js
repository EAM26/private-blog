import React from 'react';
import posts from '../../data/posts.json';
import {Link} from "react-router-dom";

function BlogPost(props) {


    return (
        <>
            <h1>Blogposts page</h1>
            {/*<p>The site contains {postsArray.length} blogs. </p>*/}
            <ul>
                <h3>Currently {posts.length} blogs available</h3>

                { posts.map((post)=> {
                    return <li key={post.id}><Link to={`/blogposts/${post.id}`}>{post.title}</Link></li>
                })}


            </ul>
        </>
    );
}

export default BlogPost;