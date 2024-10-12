import React from 'react'
import Navbar from './Components/Dark/Navbar/Navbar'
import Main from './Components/Dark/Main/Main'
import Cards from './Components/Dark/Cards/Cards'
import Refer from './Components/Dark/Refer/Refer'
import Cardsds from './Components/Dark/Cardsds/Cardsds'
import Footer from './Components/Dark/Footer/Footer'


const Dark = () => {
  return (
    <div className="bg-[black]" >
      <Navbar/>
      <Main/>
      <Cards/>
      <Refer/>
      <Cardsds/>
      <Footer/>
    </div>
  )
}

export default Dark