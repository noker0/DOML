import React from 'react'
import Navbar from './Components/Dark/Navbar/Navbar'
import Main from './Components/Dark/Main/Main'
import Cards from './Components/Dark/Cards/Cards'
import Referw from './Components/Dark/Refer/Referw'
import Cardsds from './Components/Dark/Cardsds/Cardsds'
import Footer from './Components/Dark/Footer/Footer'


const Darkw = () => {
  return (
    <div className="bg-[black]" >
      <Navbar/>
      <Main/>
      <Cards/>
      <Referw/>
      <Cardsds/>
      <Footer/>
    </div>
  )
}

export default Darkw