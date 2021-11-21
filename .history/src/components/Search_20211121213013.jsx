import React  , {useState}from 'react'

function Search() {
    const [img , setImg] = useState();
    return (
        <>
            <div className = "searchbar">
                <input onChange = {handleThat} type="text" placeholder='Search Anything' />
            </div>
        </>

    )
}

export default Search
