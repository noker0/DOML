import React from 'react'
import anal from '../../../assets/anal3d.png'
import line from '../../../assets/line.png'
import vector from '../../../assets/vector32.png'
import airtel from '../../../assets/airtel.png'
import uba from '../../../assets/uba.png'
import paga from '../../../assets/paga.png'
import mtn from '../../../assets/mtn.png'
import dangote from '../../../assets/dangote.png'
import firstbank from '../../../assets/firstbank.png'
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

const Main = () => {
  return (
    <>
        <div className="mt-[200px] flex items-center justify-center gap-[100px]">
            <div className="">
                <p className='text-[#C420FF] text-[80px] '>AI Marketing.</p>
                <p className='text-[80px] text-white '>Optimized Reach.</p>
                <p className='text-white text-[25px] w-[700px] mt-[50px]'>Our vision is to revolutionize the way brands and advertisers target, reach</p>
                <img src={line} className='w-[700px] my-[50px]' alt="" />
                <button className='text-white border-[1px] border-[#C420FF] rounded-full flex p-[7px] items-center gap-[5px] px-[40px]'>Get Started <img src={vector} alt="" /></button>
            </div>
            <img src={anal} className='' alt="" />
        </div>
        <div className=" flex justify-center mt-[150px]">
         <div className=" ">
            <div className="flex items-center gap-[100px] mb-[60px] justify-center">
                <img src={airtel} alt="" />
                <img src={uba} alt="" />
                <img src={paga} alt="" />
                <img src={mtn} alt="" />
                <img src={dangote} alt="" />
                <img src={firstbank} alt="" />
            </div>
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
        
    </>
  )
}

export default Main