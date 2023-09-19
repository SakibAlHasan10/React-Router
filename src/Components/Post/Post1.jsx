import { Link } from 'react-router-dom';
import './post1.css'
const Post1 = ({post}) => {
    const {title, id} = post
    return (
        <div className='postStyle'>
            <h4>Post Title: {title}</h4>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post1;