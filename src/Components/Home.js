import React, { useState, useEffect } from 'react';
import Header from './Header'
import Daily from './Daily'
import Search from './Search'


function Home({ city, data, handleSearch, current }) {

  return (
    <>
      <div className="space">
        <Header city={city} icon={current.weather[0].icon} />
        <Search handleSearch={handleSearch} />
      </div>

      <Daily data={data} current={current} />
    </>
  )
}
export default Home