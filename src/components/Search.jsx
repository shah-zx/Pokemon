import React  , {useState}from 'react'
import Sresult from './Sresult';


function Search() {
    const [img , setImg] = useState("");
    const handleThat = (event) => {
      const data = event.target.value;
      console.log(data)
      setImg(data);
    }
    return (
        <>
            <div className = "searchbar">
                <input onChange = {handleThat}
                 type="text"
                 value = {img}
                 placeholder='Search Anything'
                  />
                  <Sresult name = {img}/>
            </div>
        </>

    )
}

export default Search
