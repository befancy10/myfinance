import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00DBFF] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className=' md:text-7xl sm:text-6xl text-4xl font-bold md:py-4'>WELCOME TO</h1>
            <div>
                <p className=' md:text-5xl sm:text-4xl text-xl text-[#00DBFF] font-bold py-4'>FINANCE.</p>
            </div>
            <p className=' md:text-2xl text-xl font-bold text-gray-500 p-2'>Monitor your data analytics to increase revenue for Stocks, Cryptocurrencies, etc.</p>
            <button className=' bg-[#00DBFF] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero