import React from 'react'
import { useParams, useLocation  } from "react-router-dom"
import {useNavigate} from "react-router-dom"
function User() {
    const { name, lname } = useParams();
    const location = useLocation();
    const history = useNavigate();
    const handleThat = () => {
          alert("You are awesome")
    }
    console.log(history)
    return (
        <>
            <h1>User {name}, {lname} page</h1>
            <p>My current location is {location.pathname}</p>
            {location.pathname === `/user/shahnawaz/sayyed`? (
            <button onClick = {handleThat}>Click me</button>
            ) : null}
        </>
        )
}

export default User

