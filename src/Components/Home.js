import React, { useState, useEffect } from 'react';
import Header from './Header'
import Daily from './Daily'
import Search from './Search'


function Home({city,data , handleSearch}) {

  return (
    <>     
      <Header city={city} />     
      <Search handleSearch={handleSearch}/>
      <Daily data={data} />
    </>
  )
}
export default Home