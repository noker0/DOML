import React from 'react'
import Navbar from './Components/White/Navbar/Navbar'
import Main from './Components/White/Main/Main'
import Cards from './Components/White/Cards/Cards'
import Referq from './Components/White/Refer/Referq'
import Cardsds from './Components/White/Cardsds/Cardsds'
import Footer from './Components/White/Footer/Footer'

const Whiteq = () => {
  return (
    <div className="bg-[white]" >
      <Navbar/>
      <Main/>
      <Cards/>
      <Referq/>
      <Cardsds/>
      <Footer/>
    </div>
  )
}

export default Whiteq