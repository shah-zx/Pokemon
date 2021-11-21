import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
        <Link activeClassName = "active_class" to = "/about">About us</Link>
        <Link to = "/contact">Contact us</Link>
        </>
    )
}

export default Navbar
