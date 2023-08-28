import React, { useState } from 'react'

const Forms = () => {
    const [data,setdata]=useState(1)
    const change=()=>{
        setdata(data+1)
    }
  return (
    <div className='h-5 w-screen flex justify-center'>
        <div className=" w-4/5 mt-8">
        <div className="">
        <h1 className=' text-xl font-semibold mb-4'>Great choice to help people!</h1>
        <p className=' text-lg font-semibold'>Tell us few details about you & your expertise...</p>
        <div className=" flex  items-center my-4 w-3/4">
            <div style={{backgroundColor:"#047E70"}} className=" w-4 h-4 rounded-full p-3 flex items-center justify-center">
                {data>1?<h1>Tick</h1>:<h1 className='text-white'>1</h1>}
            </div>
            <div style={{backgroundColor:data>1?"#047E70":"black"}} className=" h-1 w-44"></div>
            <div style={{backgroundColor:data>=2?"#047E70":"#e8e6e1"}} className="w-4 h-4 rounded-full p-3 flex items-center justify-center">
            {data>2?<h1>Tick</h1>:<h1 style={{color:data>=2?"white":"black"}} className='font-semibold'>2</h1>}
            </div>
            <div style={{backgroundColor:data>2?"#047E70":"black"}} className=" h-1 w-44"></div>
            <div style={{backgroundColor:data===3?"#047E70":"#e8e6e1"}} className="w-4 h-4 rounded-full p-3 flex items-center justify-center">
            {data===3&&<h1 style={{color:data===3?"white":"black"}} className=' font-semibold'>3</h1>}
            </div>
        </div>
        </div>
        {data===1&&<div className="form1">
            <div className=" w-1/2 flex flex-col justify-center">
<div className=" w-full flex justify-between items-center">
    <button className=' px-4 flex justify-center items-center border-gray-400 border py-2 rounded-lg'> <img className='mr-4' src="./🦆 icon _google_.png" alt="" />Continue with Google</button>
    <h1>or</h1>
    <button className=' px-4 flex justify-center items-center border-gray-400 border py-2 rounded-lg '><img className='mr-4' src="./Vector.png" alt="" />Continue with LinkedIn</button>
</div>
            <div className=" mt-8">
                <form className=' flex flex-col ' action=" ">
                    <label className=' font-semibold' htmlFor="">
                    Full Name
                    </label>
                    <input className=' border-slate-400 border px-4 py-4 rounded-lg mt-2' type="text" />
                    <label className=' font-semibold mt-4' htmlFor="">
                    Email
                    </label>
                    <input className=' border-slate-400 border px-4 py-4 rounded-lg mt-2' type="text" />
                    <label className=' font-semibold mt-4' htmlFor="">
                    Choose a password
                    </label>
                    <input className=' border-slate-400 border px-4 py-4 rounded-lg mt-2' type="text" />
                </form>
            </div>
            </div>
            <div className=" w-1/2">

            </div>
            </div>}
        {data===2&&<div className="form2">            
        <div className="">
                
            </div>
            <div className="">

            </div></div>}
        {data===3&&<div className="form3">           
         <div className="">
                
            </div>
            <div className="">

            </div>
            </div>}
        <button onClick={change}>Click</button>
        </div>

    </div>
  )
}

export default Forms