import React from 'react'
import { useParams } from "react-router-dom"

function User() {
    const { fname } = useParams();
    return <h1>User {fname} page</h1>
}

export default User
