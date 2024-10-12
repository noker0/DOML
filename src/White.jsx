import React from 'react'
import Navbar from './Components/White/Navbar/Navbar'
import Main from './Components/White/Main/Main'
import Cards from './Components/White/Cards/Cards'
import Refer from './Components/White/Refer/Refer'
import Cardsds from './Components/White/Cardsds/Cardsds'
import Footer from './Components/White/Footer/Footer'

const White = () => {
  return (
    <div className="bg-[white]" >
      <Navbar/>
      <Main/>
      <Cards/>
      <Refer/>
      <Cardsds/>
      <Footer/>
    </div>
  )
}

export default White