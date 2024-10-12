import React from 'react'
import images  from '../../../assets/images.jpg'
import discord from '../../../assets/discordmini.png'
import vector from '../../../assets/vector.png'
import { Link } from 'react-router-dom'

const Referw = () => {
  return (
    <>
        <div className="flex justify-center mt-[150px]">
            <div className="w-[80%] h-[500px] bg-[#C420FF] rounded-[30px]">
                 <div className="flex items-center h-[450px] justify-center ml-[100px]">
                    <img className='w-[350px] h-[350px] rounded-[50px] mr-[50px]' src={images} alt="" />
                    <div className="pb-[50px]">
                        <p className='text-white w-[80%]'>It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.</p>
                        <p className='w-[300px] text-white text-[25px] mt-[15px]'>Amaka Micheal</p>
                        <p className='w-[300px] text-white my-[10px]'>Media Executive, Buying & Control</p>
                        <img src={discord} alt="" />
                    </div>
                 </div>
                 <div className="flex gap-[20px] justify-center ">
                    <img src={vector} className=' cursor-pointer' alt="" />
                    <div className="bg-black w-[15px] h-[15 px] rounded-full cursor-pointer"></div>
                    <Link to='/w'><div className="bg-black w-[15px] h-[15px] rounded-full cursor-pointer"></div></Link>
                    <Link to='/wq'><div className="bg-black w-[15px] h-[15px] rounded-full cursor-pointer"></div></Link>
                    <div className="bg-white w-[15px] h-[15px] rounded-full cursor-pointer"></div>
                    <div className="bg-black w-[15px] h-[15px] rounded-full cursor-pointer"></div>
                    <img src={vector} className='rotate-180 cursor-pointer' alt="" />
                 </div>
            </div>
        </div>
    </>
  )
}

export default Referw