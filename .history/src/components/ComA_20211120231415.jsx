import React , {useState} from 'react'

function ComA() {
    const[num , setNum]  = useState();
    const handleThat = (event) => {
        setNum(event.target.value)
    }
    return (
        <>
        <h1> You have choosen {num} </h1>
        <select 
        value = {num}
        onChange = {handleThat}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    )
}

export default ComA
