import React from 'react'

import mobile from '../assests/mobile.png'

const Analytics = () => {
  return (
    <div className=' w-full bg-white py-16 px-4'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className=' w-[500px] mx-auto my-4 ' src={mobile} alt="/" />
            <div className=' flex flex-col justify-center'>
                <p className=' text-[#00DBFF] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>With the ability and expertise in various investment topics, we can help clients understand them further. Find out more.</p>
                <button className=' bg-black text-[#00DBFF] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics