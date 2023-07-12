"use client";
import React, { useState } from 'react';
import Images from 'next/image';
import { AiOutlineCheckCircle } from 'react-icons/ai';
const AboutProps = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isPopUp, setIsPopUp] = useState(true);
    const handleBackward = () => {
        setIsPopUp(true)
         setEmail("")
    }
    const handleChange = (e) => {
      setEmail(e.target.value);
      setError('');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
  
      if (!email || !validateEmail(email) || !email.endsWith('.com')) {
        setError('Please provide a valid email');
        return;
      }
      else{
        setIsPopUp(!isPopUp);
      }
  
      console.log('Email is valid');
      setError('');
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    return (
        <div className="bg-custom min-h-screen">
          <div className="flex flex-col justify-center items-center h-screen">
    
            {
              isPopUp ? (
                <div className="one bg-white w-1/2 h-100 rounded-2xl p-6 flex md:flex-row flex-col gap-4">
                <div className="flex-1">
                  <h1 className="text-customs text-4xl">Stay Updated!</h1>
                  <p className="text-customss">
                    join 60,000+ products managers receiving monthly updates on:
                  </p>
                  <div className="flex flex-row items-center mt-4">
                    <div className="">
                      <AiOutlineCheckCircle />
                    </div>
                    <div className="text-xs ml-2">
                      <p className="">product discovery and building what matters</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-4">
                    <div className="">
                      <AiOutlineCheckCircle />
                    </div>
                    <div className="text-xs ml-2">
                      <p className="">measuring to ensure updates are successful</p>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-4">
                    <div className="">
                      <AiOutlineCheckCircle />
                    </div>
                    <div className="text-xs ml-2">
                      <p className="">And much more</p>
                    </div>
                  </div>
                  <div className="email mt-3">
                    <div className="flex flex-row items-center">
                      <div className="flex-1">
                        <h3>Email address</h3>
                      </div>
                      <div className="flex-1">
                      {error && <p className="text-red-500 text-sm">Please provide a valid email</p>}
                      </div>
                    </div>
                  <input
                      type="email"
                      className={`peer ... mt-1 h-8 border w-full border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2 ${
                        error ? 'border-red-500' : ''
                      }`}
                      required
                      value={email}
                      onChange={handleChange}
                    />
      
                    
      
                    <button
                    onClick={handleSubmit}
                      className="bg-black text-white rounded-md px-4 py-2 w-full mt-2 hover:bg-gray-900"
                    >
                      Subscribe to monthly newsletter
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <Images
                    src="/sign.svg"
                    alt="sign Logo"
                    className="dark:invert"
                    width={250}
                    height={100}
                    priority
                  />
                </div>
              </div>
              ) : (
                <div className="">
                <h1>Thanks for subscribing!</h1>
                <p>  A confirmation email has been sent to ash@loremcompany.com.</p>
                <p>Please open it and click the button inside to confirm your subscription.</p>
      
                <button onClick={handleBackward} class="inline-flex text-white bg-custom border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Dismiss message
                </button>
              </div>
              )
            }
    
    
          </div>
          
        </div>
      );
}

export default AboutProps