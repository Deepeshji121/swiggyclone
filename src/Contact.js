import { useContext } from "react";
import UserContext from "./utils/UserContext";
const Contact =()=>{
    const {user}=useContext(UserContext)
    return(
        <>
            <div>
                <h1>Contact Us</h1>
                <h2>Email: {user.name}</h2>
                <h2>Phone: +91 9876543210</h2>
            </div>
        </>
    )
}
export default Contact;