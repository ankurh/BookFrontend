import React from 'react'
import Banner from './Banner'
import TopSeller from './TopSeller'
import Recomended from './Recomended'

const Home = () => {
  return (
    <>
      <div><Banner/></div>
      <TopSeller></TopSeller>
      <Recomended/>
    </>
  )
}

export default Home