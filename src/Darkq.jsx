import React from 'react'
import Navbar from './Components/Dark/Navbar/Navbar'
import Main from './Components/Dark/Main/Main'
import Cards from './Components/Dark/Cards/Cards'
import Referq from './Components/Dark/Refer/Referq'
import Cardsds from './Components/Dark/Cardsds/Cardsds'
import Footer from './Components/Dark/Footer/Footer'


const Darkq = () => {
  return (
    <div className="bg-[black]" >
      <Navbar/>
      <Main/>
      <Cards/>
      <Referq/>
      <Cardsds/>
      <Footer/>
    </div>
  )
}

export default Darkq