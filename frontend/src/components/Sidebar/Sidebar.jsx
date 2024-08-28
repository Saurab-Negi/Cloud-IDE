import { useState } from 'react'
import logo from '../../assets/logo.png'
import Client from '../Client/Client'

const Sidebar = () => {

    const [client, setClient]= useState([
        {socketId: 1,username: "Saurab"},
        {socketId: 2,username: "Akshit"},

    ])

  return (
    <div className='w-full max-w-xs h-screen bg-gray-700 text-white flex flex-col justify-start items-center gap-3 shadow-inner rounded-r-xl px-4 py-8'>
      
      <div className="w-full flex flex-col items-center gap-6">
        <img className='w-36 rounded-md shadow-2xl' src={logo} alt="" />
        <hr className='w-full' />
      </div>

      <div className="w-full min-h-[25rem] flex flex-col items-start gap-4 overflow-auto">
        <p>Members</p>
        <div>
            {client.map((client) =>(
                <Client key={client.socketId} username={client.username} />
            ))}
        </div>
      </div>
      
      <div className="w-full flex flex-col gap-6">
        <hr />
        <div className="px-8 flex justify-between items-center">
          <button className='bg-green-600 px-5 py-1 rounded-2xl shadow-2xl'>Room ID</button>
          <button className='bg-red-600 px-5 py-1 rounded-2xl shadow-2xl'>Leave</button>
        </div>
      </div>
  
    </div>
  )
}

export default Sidebar
