import React from 'react'
import Navbar from './Components/White/Navbar/Navbar'
import Main from './Components/White/Main/Main'
import Cards from './Components/White/Cards/Cards'
import Referw from './Components/White/Refer/Referw'
import Cardsds from './Components/White/Cardsds/Cardsds'
import Footer from './Components/White/Footer/Footer'

const Whitew = () => {
  return (
    <div className="bg-[white]" >
      <Navbar/>
      <Main/>
      <Cards/>
      <Referw/>
      <Cardsds/>
      <Footer/>
    </div>
  )
}

export default Whitew