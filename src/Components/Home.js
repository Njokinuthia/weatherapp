import React, { useState, useEffect } from 'react';
import Header from './Header'
import Daily from './Daily'


function Home({city,data}) {

  return (
    <>     
      <Header city={city} />
      <Daily data={data} />
    </>
  )
}
export default Home