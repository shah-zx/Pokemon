import React from 'react'

function Search() {
    const [img , setImg] = useState();
    return (
        <>
            <div className = "searchbar">
                <input type="text" placeholder='Search Anything' />
            </div>
        </>

    )
}

export default Search
