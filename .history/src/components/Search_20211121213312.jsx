import React  , {useState}from 'react'

function Search() {
    const [img , setImg] = useState("");
    const handleThat = (event) => {
      const data = event.target.value;
      console.log(data)
    }
    return (
        <>
            <div className = "searchbar">
                <input onChange = {handleThat}
                 type="text"
                 value = {img}
                 placeholder='Search Anything' />
            </div>
        </>

    )
}

export default Search
