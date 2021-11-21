import React from 'react'
import {useParams} from 'react-router-dom'
function User({match}) {
    return (
        <div>
            <h1>User {match.params.fname} page</h1>
        </div>
    )
}

export default User
