import React from 'react'
import logo from '../../../assets/logo.png'
import down from '../../../assets/dropdown.png'
import code from '../../../assets/code.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className='h-[50px] justify-center flex gap-[200px] pt-[20px]'>
        <div className="items-center flex h-[50px] ">
          <Link to='/w'><img src={logo}  className='mr-[40px]' alt="" /></Link>
            <ul className='flex gap-[20px] '>
                <li className='text-white flex items-center cursor-pointer'>Product <img src={down} className='w-[20px] h-[20px] pt-[2px]' alt="" /></li>
                <li className='text-white flex items-center cursor-pointer'>Team </li>
                <li className='text-white flex items-center cursor-pointer'>Enterprise </li>
                <li className='text-white flex items-center cursor-pointer'>Explore <img src={down} className='w-[20px] h-[20px] pt-[2px]' alt="" /></li>
                <li className='text-white flex items-center cursor-pointer' >Marketplace </li>
                <li className='text-white flex items-center cursor-pointer'>Pricing <img src={down} className='w-[20px] h-[20px] pt-[2px]' alt="" /></li>
            </ul>
        </div>
        <div className="flex items-center pt-[20px]">
            <input type="text" placeholder='Search DOML' className='text-white bg-[#344670] p-[5px] rounded-lg' name="" id="" />
            <img className='absolute left-[1170px]' src={code} alt="" />
            <button className='text-white ml-[20px] mr-[20px] h-[30px] w-[60px]'>Sing in</button>
            <button className='text-white rounded-lg border-[1px] border-white p-[5px] px-[10px]'>Sing up</button>
        </div>
     </nav>
    </>
  )
}

export default Navbar