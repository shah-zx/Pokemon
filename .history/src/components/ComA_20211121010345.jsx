import React, { useState , useEffect } from 'react'
import axios from 'axios'


function ComA() {
    const [num, setNum] = useState();
    const handleThat = (event) => {
        setNum(event.target.value)
    }

    useEffect(() => {
      async function getData(){
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
          console.log(res)
      }
    })

    return (
        <>
            <h1> You have choosen {num} </h1>
            <select
                value={num}
                onChange={handleThat}>
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

