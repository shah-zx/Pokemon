import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <>
        <div className = "menu_style">
        <Link activeClassName = "active_class" to = "/about">About</Link>
        <Link activeClassName = "active_class" to = "/contact">Contact us</Link>
        <Link activeClassName = "active_class" to = "/user">User</Link>
        </div>
        </>
    )
}

export default Navbar
