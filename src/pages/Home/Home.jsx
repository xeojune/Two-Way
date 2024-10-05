import React from 'react'
import Header from '../../components/header'
import Banner from '../../components/Banner/Banner'
import ItemList from '../../components/ItemList/ItemList'

function Home() {
  return (
    <div className='Wrapper'>
      <Header/>
      <Banner />
      <ItemList />
    </div>
  )
}

export default Home