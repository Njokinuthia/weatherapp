import React, { useState } from 'react';


function Search({handleSearch}) {
  const [search, setSearch] = useState("")

  function handleChange(event) {
  
    setSearch(event.target.value)
    console.log(search)    
    }

  function handleSubmit(event){
    event.preventDefault()
    console.log("submitted")
    handleSearch(search)  
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='search for city'
        value={search}
        onChange={handleChange}
        required></input>
      <input type="submit" value="searchIcon"></input>
    </form>
  )

}
export default Search;