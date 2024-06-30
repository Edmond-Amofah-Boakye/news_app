"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import NewsletterSignup from '@/components/news/NewsLetter';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

// Dummy data for saved articles
const savedArticles = [
  {
    title: "I am changing it backi",
    description: "Messi has won his 8th Ballon D'or award, making history once again.",
    image: "https://www.aljazeera.com/wp-content/uploads/2021/11/2021-11-29T211250Z_704190787_UP1EHBT1MXC65_RTRMADP_3_SOCCER-BALLON.jpg?resize=1800%2C1800",
    author: "Jane Smith",
    date: "24 December, 2024",
    link: "article/1"
  },
  {
    title: "It is fineds",
    description: "The championship match ended with a thrilling finish, keeping fans on the edge of their seats.",
    image: "https://image.maxpreps.io/editorial/article/7/c/6/7c6f3101-c840-4ca2-b538-ac8340ad2fd0/842376e6-f2bd-ed11-80d3-0a9bf6d97784_original.jpg",
    author: "John Doe",
    date: "25 December, 2024",
    link: "article/1"
  },
  {
    title: "Bad energyhsjsj",
    description: "A key player has been ruled out for the season due to injury, impacting the team's strategy.",
    image: "https://dims.apnews.com/dims4/default/b543bcb/2147483647/strip/true/crop/4189x2792+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F07%2F7a%2Fb3e9d24fb769b0097a5c522174e0%2F5cd3c74e38f445598e5eb6cf3368fdf8",
    author: "Jane Smith",
    date: "24 December, 2024",
    link: "article/1"
  },
];

const SavedArticlesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-[500px] p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fit=crop&w=1650&q=80')" }}>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">
          <h1 className="text-white text-6xl font-bold mb-4">Your Saved Articles</h1>
          <p className="text-white text-3xl font-bold mb-8">Your favorite articles, all in one place</p>
          <button className="bg-white text-blue-900 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-300"><Link href={`/`}>Explore More</Link></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">Welcome back!</h2>
        <p className="text-xl text-gray-700 mb-8">Here are the articles you've saved to read later. Enjoy catching up!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedArticles.map((article, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
              <Image
                src={article.image}
                alt={article.title}
                width={100}
                height={800}
                unoptimized
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{article.title}</h3>
                <p className="text-gray-700 mb-4">{article.description}</p>
                <div className="text-gray-500 text-sm flex justify-between items-center">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>
                <Link href={article.link} className="text-blue-600 mt-2 inline-block">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="text-xl text-gray-700 mb-8">Follow us on social media to get the latest updates.</p>
        <div className="flex justify-center space-x-4">
          <FcGoogle className="w-10 h-10 text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-300" />
          <FaFacebook className="w-10 h-10 text-blue-600 cursor-pointer hover:text-blue-800 transition-colors duration-300" />
          <FaTwitter className="w-10 h-10 text-blue-400 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
        </div>
      </div>
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default SavedArticlesPage;
