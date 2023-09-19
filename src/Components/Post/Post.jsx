import { Link, useLoaderData } from "react-router-dom";
import Post1 from "./Post1";
import './post1.css'

const Post = () => {
    const posts = useLoaderData();
    
    return (
        <div>
            <h2>Post:{posts.length}</h2>
            <div className="posts">

                {
                    posts.map((post, idx)=> <Post1 key={idx} post={post}></Post1>)
                }
            </div>
        </div>
    );
};

export default Post;