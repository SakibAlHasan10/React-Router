import { Link } from "react-router-dom";

const User = ({user}) => {
    console.log(user)
    const {company, name, email, phone, id} = user
    // console.log(company)
    const userStyle ={
        border: '2px solid green',
        padding: '10px',
        margin: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;