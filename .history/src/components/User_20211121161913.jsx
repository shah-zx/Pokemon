import React from 'react'
import { useParams } from "react-router-dom"

function User() {
    const { fname } = useParams();
    <h1>User {fname} page</h1>


}

export default User
