import React, { useEffect, useState } from 'react'
import Linkss from '../navbar/Linkss'
import { Link } from 'react-router-dom'
import { MdCompareArrows } from "react-icons/md";
function Home() {
  const [isNavbar,setIsNavbar]=useState(false);

  return (
    // <div style={{ marginTop: '25%', marginLeft: '45%' }}>
    <div>
      {/* <h3>Welcome to TestApp</h3>
        <Linkss/> */}
    <div className={`grid ${!isNavbar?'md:grid-cols-8':'md:grid-cols-15'}`}>
      {!isNavbar?
        <div className='relative'>
        <nav className="md:mr-1 bg-red-200 h-full">
            <div>
                <h1 className="font-bold text-2xl uppercase p-4 border-b-2 border-gray-300 text-center">
                    <a href="/">Food Ninja</a>
                </h1>
                <ul className="font-bold ml-4 flex flex-row space-x-4 md:flex-col">
                    <li className="text-red-400 text-xl">
                        <a href="#">
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
            <button onClick={()=>setIsNavbar(!isNavbar)}><MdCompareArrows className='absolute mt-4 top-2 left-44 border-2 bg-red-200'/></button>
        </nav>
      </div>:
      <div className='relative'>
      <nav className="bg-red-200 h-full">
          <div>
              <ul className="font-bold ml-4 flex flex-row space-x-4 md:flex-col">
                  <li className="text-red-400 text-xl">
                      <a href="#">
                          <span>H</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>A</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <span>C</span>
                      </a>
                  </li>
              </ul>
          </div>
          <button onClick={()=>setIsNavbar(!isNavbar)}><MdCompareArrows className='absolute mt-4 top-2 left-24 border-2 bg-red-200'/></button>
      </nav>
    </div>
      }
      <main className={`bg-gray-100 ${!isNavbar? 'md:col-span-7':'md:col-span-14'}`}>
        <div className="flex justify-center text-white sm:justify-start md:justify-end bg-green-400 ">
            <a href="login" className="ml-2">
                <button className="bg-red-400 border border-2 border-gray-200 hover:bg-yellow-600 hover:text-red-900">Log In</button>
            </a>
            <a href="register" className="ml-1">
                <button className="bg-red-400 border border-2 border-gray-200 hover:bg-yellow-600 hover:text-red-900">Sign Up</button>
            </a>
        </div>


        <header className="font-semibold text-yellow-900 ml-4">
            <h2 className="text-3xl">Recipes</h2>
            <h3 className="text-2xl">For Ninjas</h3>
        </header>
        <div>
            <h4 className="mt-12 ml-8 pb-5">Latest Recepies</h4>
            <div>
                <div className="md:flex bg-white rounded-xl overflow-hidden shadow-xl overflow-scroll ml-1 p-8">
                    <div className="md:flex mb-2">
                    <div className="relative">
                    <img className="md:p-2 md:w-full" src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=" alt="Food Pic"/>
                    <div className="ml-1">
                        <span>Mixed Raw Vegetables</span>
                        <div>
                         <span className="text-gray-400">Recipes by Hell</span>
                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border-1 border-blue-700 rounded ml-32">Order Now</button>
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black bg-opacity-45 text-white">
                        ISO certified
                    </div>
                    <div className="m-2 bg-gray-300 rounded-md inline p-1">
                        25<span className="italic p-1">mins</span>
                    </div>
                </div>
                <div className="mr-4 md:w-96 md:h-60 overflow-scroll text-justify">
                    <div>
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                    </div>
                </div>
                </div>
                <div className="md:flex">
                    <div className="relative">
                        <img className="p-2 md:w-full" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=sph" alt="Food Pic"/>
                        <div className="ml-1">
                            <span>Mixed Raw Vegetables</span>
                            <div className="text-gray-400">
                                <span>Recipes by Hell</span>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border-1 border-blue-700 rounded ml-32">
                                        Order Now
                                      </button>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-black bg-opacity-45 text-white">
                            ISO certified
                        </div>
                        <div className="m-2 bg-gray-300 rounded-md inline p-1">
                            12<span className="italic p-1">mins</span>
                        </div>
                    </div>
                    <div className="mr-4 md:w-96 md:h-60 overflow-scroll text-justify">
                        <div>
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People.
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <h4 className="mt-12 pb-5 ml-8">Most Popular</h4>
            <div>
                <div className="md:flex bg-white rounded-xl overflow-hidden shadow-xl overflow-scroll ml-1">
                    <div className="md:flex mb-2">
                    <div className="relative">
                    <img className="p-2 md:w-full" src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?b=1&s=612x612&w=0&k=20&c=V8oaDpP3mx6rUpRfrt2L9mZCD0_ySlnI7cd4nkgGAb8=" alt="Food Pic"/>
                    <div className="ml-1">
                        <span>Mixed Raw Vegetables</span>
                        <div>
                         <span className="text-gray-400">Recipes by Hell</span>
                         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border-1 border-blue-700 rounded ml-32">Order Now</button>
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-black bg-opacity-45 text-white">
                        ISO certified
                    </div>
                    <div className="m-2 bg-gray-300 rounded-md inline p-1">
                        25<span className="italic p-1">mins</span>
                    </div>
                </div>
                <div className="mr-4 md:w-96 md:h-60 overflow-scroll text-justify">
                    <div>
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                        This is very popular cuisine among American and Nepalese People. 
                    </div>
                </div>
                </div>
                <div className="md:flex">
                    <div className="relative">
                        <img className="p-2 md:w-full" src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706832000&semt=sph" alt="Food Pic"/>
                        <div className="ml-1">
                            <span>Mixed Raw Vegetables</span>
                            <div className="text-gray-400">
                                <span>Recipes by Hell</span>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border-1 border-blue-700 rounded ml-32">
                                        Order Now
                                      </button>
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-black bg-opacity-45 text-white">
                            ISO certified
                        </div>
                        <div className="m-2 bg-gray-300 rounded-md inline p-1">
                            12<span className="italic p-1">mins</span>
                        </div>
                    </div>
                    <div className="mr-4 md:w-96 md:h-60 overflow-scroll text-justify">
                        <div>
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People. 
                            This is very popular cuisine among American and Nepalese People.
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="bg-green-300 rounded-xl">
                    <button className="border-2 hover:bg-green rounded hover:font-bold hover:text-yellow-600">Load More</button>
                </div>
            </div>
            </div>
        </div>
      </main>
    </div> 
    </div>
  )
}

export default Home