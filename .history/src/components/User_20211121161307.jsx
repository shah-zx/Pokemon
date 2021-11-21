import React from 'react'

function User({match}) {
    return (
        <div>
            <h1>User {match.params.name} page</h1>
        </div>
    )
}

export default User
