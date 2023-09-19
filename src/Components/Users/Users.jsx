import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
   
    return (
        <div>
            <h1>Our users: {users.length}</h1>
            <h2>hello our users</h2>
            <div className="users">
                {
                    users.map((user, idx) => <User key={idx} 
                    user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;