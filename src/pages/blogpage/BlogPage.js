import React from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import posts from '../../data/posts.json';
import login from "../login/Login";


function BlogPage() {

    const { blogId } = useParams()
    const navigate = useNavigate()


    const blog = posts.find((post) => {
        return post.id === blogId
    })

    return (
        <>
            <h1>{blog.title}</h1>
            <h3>{blog.date}</h3>
            <p>{blog.content}</p>

            <button onClick={(()=> {
                navigate("../home")
            })}>Go Back</button>

        </>
    );
}

export default BlogPage;