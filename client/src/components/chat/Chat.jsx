import React, {useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom'

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
      setMessage(...messages, message)
    })
  },[messages])

  //function for sending messages
  
  return (
    <h1>
      Chat
    </h1>
  )
}

export default Chat
