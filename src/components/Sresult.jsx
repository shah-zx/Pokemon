import React from 'react'

function Sresult(props) {
    const img = `https://source.unsplash.com/600x300/?${props.name}`;
    return (
        <>
        <div>
           <img src = {img} alt = "image"/> 
        </div>
        </>
    )
}

export default Sresult
