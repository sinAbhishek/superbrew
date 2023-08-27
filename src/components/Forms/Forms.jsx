import React, { useState } from 'react'

const Forms = () => {
    const [data,setdata]=useState(1)
    const change=()=>{
        setdata(data+1)
    }
  return (
    <div className='h-5 w-screen flex justify-center'>
        <div className=" w-4/5">
        <div className="">
        <h1 className=' text-xl font-semibold'>Great choice to help people!</h1>
        <p className=' text-lg font-semibold'>Tell us few details about you & your expertise...</p>
        <div className=" flex justify-center items-center">
            <div style={{backgroundColor:"#047E70"}} className=" w-4 h-4 rounded-full">
                {data>1?<h1>Tick</h1>:<h1>1</h1>}
            </div>
            <div style={{backgroundColor:data>1?"#047E70":"black"}} className=" h-1 w-12"></div>
            <div style={{backgroundColor:data>=2?"#047E70":"gray"}} className="w-4 h-4 rounded-full">
            {data>2?<h1>Tick</h1>:<h1>2</h1>}
            </div>
            <div style={{backgroundColor:data>2?"#047E70":"black"}} className=" h-1 w-12"></div>
            <div style={{backgroundColor:data===3?"#047E70":"gray"}} className="w-4 h-4 rounded-full">
            {data===3&&<h1>3</h1>}
            </div>
        </div>
        </div>
        {data===1&&<div className="form1"> form1</div>}
        {data===2&&<div className="form2">form2</div>}
        {data===3&&<div className="form3">form3</div>}
        <button onClick={change}>Click</button>
        </div>

    </div>
  )
}

export default Forms