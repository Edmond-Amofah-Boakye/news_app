import Navbar from '@/components/Navbar'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import HomepageArticles from '@/components/news/HomepageArticles';
import Footer from '@/components/footer/Footer';
import NewsletterSignup from '@/components/news/NewsLetter';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[500px] p-8 pt-16">
        <div className="absolute inset-0 bg-slate-950 opacity-50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/524372433/photo/group-of-people-waving-the-flag-of-israel.jpg?s=612x612&w=0&k=20&c=cpQS19u6ApfChmLm_8pMjl9P0KokXvbJtMwbVJ4tgU4=')] bg-no-repeat bg-cover z-0"></div>
        <div className="relative z-20 p-4">
          <h1 className='text-white text-6xl font-bold mb-4'>THE VOICE</h1>
          <p className='text-white text-3xl font-bold mb-3'>Israel's aggression <br /> in Gaza continues</p>
          <p className='text-[#B9B9B9] mb-4'>
            <span className='mr-2'>Politics |</span>
            <span className='mr-2'>John Doe |</span>
            <span>25 December, 2024</span>
          </p>
          <div className="flex justify-between items-center">
            <button className='text-white bg-[#C00000] py-2 px-4 rounded'>Read More</button>
            <div className="flex justify-between flex-col gap-7">
              <FcGoogle className="w-10 h-5 cursor-pointer"/>
              <FaFacebook className="text-blue-700 w-10 h-5 cursor-pointer" />
              <FaTwitter className="text-blue-400 w-10 h-5 cursor-pointer" />
          </div>
          </div>
        </div>
      </div>
      <HomepageArticles />
      <NewsletterSignup />
      <Footer />
    </div>
  )
}

export default page
