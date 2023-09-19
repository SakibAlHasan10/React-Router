import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetais = () => {
    const post = useLoaderData()
    const {postId} = useParams()
    const {title, body, id} = post
    const Navigate = useNavigate()
    console.log(postId)
    const handleNavigate = () =>{
        Navigate(-1)
    }
    return (
        <div>
            <h2>Post: {id}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleNavigate}>Back</button>
        </div>
    );
};

export default PostDetais;