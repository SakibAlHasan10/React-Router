import { useLoaderData } from "react-router-dom";

const PostDetais = () => {
    const post = useLoaderData()
    const {title, body} = post
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetais;