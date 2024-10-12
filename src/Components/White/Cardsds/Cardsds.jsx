import React from 'react'
import line from '../../../assets/line.png'
import vector from '../../../assets/vector32.png'
import anus from '../../../assets/anus3d.png'
import xuy from '../../../assets/xuy3d.png'

const Cardsds = () => {
  return (
    <>
     <div className="mt-[200px] flex items-center justify-center gap-[100px]">
            <div className="">
                <p className='text-[#C420FF] text-[50px] '>AI Marketing.</p>
                <p className='text-[50px] text-black  '>Optimized Reach.</p>
                <p className='text-black  text-[23px] w-[520px] mt-[50px]'>DOML is a digital media agency powered by AI technology providing real time,<span className='text-[#005fcf]'>data-driven insights</span>  on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and <span className='text-[#005fcf]'>strategic execution.</span></p>
                <img src={line} className='w-[550px] my-[50px]' alt="" />
                <button className='text-black  border-[1px] border-[#C420FF] rounded-full flex p-[7px] items-center gap-[5px] px-[40px]'>Learn More <img src={vector} alt="" /></button>
            </div>
            <img src={anus} className='' alt="" />
        </div>
        <div className="mt-[200px] flex items-center justify-center gap-[100px]">
        <img src={xuy} className='' alt="" />
            <div className="">
                <p className='text-[#C420FF] text-[50px] '>AI Marketing.</p>
                <p className='text-[50px] text-black '>Optimized Reach.</p>
                <p className='text-black text-[23px] w-[570px] mt-[50px]'>It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.</p>
                <img src={line} className='w-[600px] my-[50px]' alt="" />
                <button className='text-black  border-[1px] border-[#C420FF] rounded-full flex p-[7px] items-center gap-[5px] px-[40px]'>Learn More <img src={vector} alt="" /></button>
            </div>
        </div>
    </>
  )
}

export default Cardsds