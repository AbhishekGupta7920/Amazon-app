import React from 'react'
import banner from '../assets/HeroBanner.jpg'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
  // this is the here banner page data
  return (
    <div className='bg-gray-100 lg:pt-10 pt-1'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'Top' }}>
        <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white px-4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Bringing the Mall to Your Fingertips!</h1>
            <p className='text-lg md:text-xl mb-6'>Discover a world of endless possibilities — shop smarter, live better</p>
            <Link to='/explore-products' >
              <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
