import React from 'react'
import paga from '../../../assets/paga.png'
import google from '../../../assets/google cloud.png'
import ebay from '../../../assets/ebay.png'
import linux from '../../../assets/linux.png'
import spoti from '../../../assets/spotify.png'
import airbnb from '../../../assets/airbnb.png'
import facebook from '../../../assets/facebook.png'
import coca from '../../../assets/coca cola.png'
import zoom from '../../../assets/zoom.png'
import za from '../../../assets/za.png'
import netflix from '../../../assets/netflix.png'
import discord from '../../../assets/discord.png'
import figma from '../../../assets/figma.png'
import paypal from '../../../assets/paypal.png'
import adobe from '../../../assets/adobe.png'
import vector from '../../../assets/vector32.png'
import govno from '../../../assets/govno3d.png'
import line from '../../../assets/line.png'

const Footer = () => {
  return (
    <>
    <div className="flex justify-center mt-[150px]">
        <div className="w-[80%] h-[600px] bg-[#491aff] rounded-[30px] flex items-center">
           <img src={govno}  alt="" />
           <div className="ml-[50px]">
                <p className='text-white text-[50px] mb-[30px] w-[550px]'>Get exponential reach via <span className='font-bold'>AI Marketing</span></p>
                <div className="flex">
                   <input type="text" placeholder="Enter Your Work Email " className="border-[1px] border-[#C420FF] px-[15px] py-[10px] rounded-full w-[350px] bg-indigo-600 bg-opacity-90 mr-[20px] text-white"/>
                   <button className='bg-black text-white border-[1px] border-[#C420FF] rounded-full flex p-[7px] items-center gap-[5px] px-[40px]'>Get in Touch <img src={vector} alt="" /></button>
                </div>
           </div>
        </div>
    </div>
        <div className=" flex justify-center mt-[150px]">
         <div className=" ">
            <div className="flex items-center gap-[45px] mb-[60px] justify-center">
                <img src={google} alt="" />
                <img src={ebay} alt="" />
                <img src={paga} alt="" />
                <img src={linux} alt="" />
                <img src={spoti} alt="" />
                <img src={airbnb} alt="" />
                <img src={facebook} alt="" />
                <img src={coca} alt="" />
            </div>
            <div className="flex items-center gap-[80px]  justify-center">
                <img src={zoom} alt="" />
                <img src={za} alt="" />
                <img src={netflix} alt="" />
                <img src={discord} alt="" />
                <img src={figma} alt="" />
                <img src={paypal} alt="" />
                <img src={adobe} alt="" />
            </div>
         </div>
        </div>
        <p className='text-white flex justify-center mt-[50px]'>Trusted by the world’s most ambitious teams.</p>

        <img src={line} className='mt-[100px] h-[1px] mb-[10px] w-[80%] ml-[10%]' alt="" />
        <div className="flex justify-between w-[80%] ml-[10%] pb-[50px] ">
          <p className='text-white'>Copyright © 2022 DOML. All rights reserved.</p>
          <p className='text-white'>Terms of Use & Privacy Policy</p>
        </div>
    </>
  )
}

export default Footer