import React from 'react';
import logo from "../../assets/logo.png";

const FormCard = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="flex flex-col gap-8 items-center w-full max-w-md text-center shadow-lg mx-4 p-10 rounded-lg bg-purple-gradient">
          
        <img className='w-36 mb-4 rounded-md shadow-2xl' src={logo} alt="CodeShare" />

        <div className="w-full text-center">
          <h4 className="text-white text-4xl font-semibold mb-12">Join Room!</h4>

          <div className="mb-4">
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Enter Room ID" />                               
          </div>

          <div className="mb-12">
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none" placeholder="Enter Username" />
          </div>

          <button className='bg-red-500 hover:bg-rose-500 text-white tracking-wider font-bold py-2 px-8 rounded-full mb-4 transition-colors duration-300'>Join</button>

          <p className='text-white text-sm'>
            Don't have a room ID?&nbsp;&nbsp;&nbsp;
            <span className='text-red-500 text-base cursor-pointer underline'>New Room</span>
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default FormCard;
