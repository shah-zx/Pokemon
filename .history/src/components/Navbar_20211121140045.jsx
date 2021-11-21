import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
        <Link to = "/about">About us</Link>
        <a href = "/contact">Contact us</a>
        </>
    )
}

export default Navbar
