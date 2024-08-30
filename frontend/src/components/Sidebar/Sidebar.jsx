import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import Client from '../Client/Client'
import { initSocket } from '../../Socket'
import { toast } from "react-hot-toast";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"

const Sidebar = () => {

  const socketRef= useRef(null);
  const location = useLocation();
  const { roomId }= useParams();
  const navigate= useNavigate();

  const [client, setClient]= useState([]);

  useEffect(() =>{
    const init= async () =>{
      socketRef.current= await initSocket();
      socketRef.current.on('connect_error', (err) => handleError(err));
      socketRef.current.on('connect_failed', (err) => handleError(err));

      const handleError= (e) =>{
        console.log('socket error: ',e);
        toast.error("Socket connection failed");
        navigate('/');
      }
      socketRef.current.emit('join', {
        roomId,
        username: location.state?.username,
      })
      socketRef.current.on('joined', ({clients, username, socketId}) =>{
        if(username !== location.state?.username){
          toast.success(`${username} joined`);        
        }
        setClient(clients);
    })
    }
    init();
  },[])

    if(!location.state){
      return <Navigate to='/' />;
    }

  return (
    <div className='w-full max-w-xs h-screen bg-slate-800 text-white flex flex-col justify-start items-center gap-3 shadow-inner rounded-r-xl px-4 py-8'>
      
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
