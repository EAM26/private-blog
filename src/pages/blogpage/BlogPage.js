import React from 'react';
import {useParams} from "react-router-dom";


function BlogPage() {

    const { blogId } = useParams()
    return (
        <>
        <h1>My Blog { blogId }</h1>
        </>
    );
}

export default BlogPage;