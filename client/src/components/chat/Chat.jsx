import React, {useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom'

import Infobar from '../infobar/Infobar'

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000'
  const location = useLocation();
  useEffect(()=>{
    const {name,room}= queryString.parse(location.search)

    socket = io(ENDPOINT,{
      transports: ['websocket'],
      upgrade: false,
    })

    setName(name);
    setRoom(room);

    socket.emit('join', {name, room},   ()=>{    }  );

    return () => {
      socket.emit('disconnectNew');
      socket.off();
    }

  },[ENDPOINT, location.search])

  //function for incoming messages
  useEffect(()=>{
    socket.on('message', (message)=>{
      setMessages([...messages, message])
    })
  },[messages])

  //function for sending messages
  const sendMessage = (event) => {
    event.preventDefault();

    if(message){
      socket.emit('sendMessage', message, ()=>setMessage(''))
    }

    console.log(message, messages);
  }
  
  return (
    <main className='flex flex-row justify-center items-center'>
      <div className='flex flex-col justify-start items-center'>
        <Infobar />
        <input type='text' 
          className='border-2 border-gray-400 rounded-md p-2 m-2'
          value={message} 
          onChange={(e)=>{setMessage(e.target.value)}}
          onKeyDown={event => event.key === 'Enter' ? 
                              sendMessage(event) : 
                              null
                    }  
        />

      </div>
    </main>
  )
}

export default Chat
