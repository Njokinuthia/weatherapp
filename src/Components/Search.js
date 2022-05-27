import React, { useState } from 'react';


function Search({ handleSearch }) {
  const [search, setSearch] = useState("")

  function handleChange(event) {
    setSearch(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("submitted")
    handleSearch(search)
  }

  return (
    <div >
      <form className="search center ml-4" onSubmit={handleSubmit}>
        <input
         type="text"
          placeholder='search for city'
          value={search}
          onChange={handleChange}
          required></input>
        <input className="searchBtn" type="submit" value="search"></input>
      </form>
    </div>
  )

}
export default Search;