import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  const [value, setValue] = useState("")
  return (
    <footer className='bg-gray-900 text-gray-200 py-10 mt-3'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/* Company info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              <img src={Logo} alt="" className='w-32'/>
            </Link>
            <p className='mt-2 text-sm'>High-quality, sustainable products at affordable prices.</p>
            <p className='text-sm'>Email: support@amazon.com</p>
            <p className='text-sm'>Phone: (123) 456-7890</p>
        </div>
        {/* Customer service links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <Link to="/faqs"><li>FAQs</li></Link>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
        </div>
        {/* Social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitterSquare/>
                <FaPinterest/>
            </div>
        </div>
        {/* Newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-4 flex' onSubmit={(e)=>{ e.preventDefault(); setValue("")}}>
                <input 
                type="email" 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Your email address'            
                className='w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500'
                />
                <button type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* Bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()}<span className='text-red-500'>Amazon</span>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  )
}

export default Footer
