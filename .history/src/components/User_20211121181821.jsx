import React from 'react'
import { useParams , useLocation } from "react-router-dom"

function User() {
    const { name , lname } = useParams();
    return <h1>User {name }, {lname} page</h1>
}

export default User
