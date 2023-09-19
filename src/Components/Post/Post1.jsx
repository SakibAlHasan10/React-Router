import { Link, useNavigate } from 'react-router-dom';
import './post1.css'
const Post1 = ({post}) => {
    const {title, id} = post
    const navigate = useNavigate()
    const heandlepostDetails = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='postStyle'>
            <h2>post: {id}</h2>
            <h4>Post Title: {title}</h4>
            <Link to={`/post/${id}`}>Post Details</Link> <br />
            <button onClick={heandlepostDetails}>Click to see details</button>
        </div>
    );
};

export default Post1;