import React, {useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom'

import Infobar from '../infobar/Infobar'
import Input from '../input/Input'
import Messages from '../messages/Messages'
import TextContainer from '../textContainer/TextContainer'

let socket;

const Chat = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState();
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

    socket.emit('join', {name, room},   (error)=>{
      if(error){
        alert(error);
      }
    }  );

    return () => {
      // socket.emit('disconnect');
      socket.off();
    }

  },[ENDPOINT, location.search])

  //function for incoming messages
  useEffect(()=>{
    socket.on('message', (message)=>{
      setMessages([...messages, message])
    });
    socket.on('roomData', ({room,users})=>{
      setUsers(users);
    });

  },[messages]);

  let nameOfUsers = users?.map((user)=><p key={user.id}>{user.name}</p>);

  //function for sending messages
  const sendMessage = (event) => {
    event.preventDefault();

    if(message){
      socket.emit('sendMessage', message, ()=>setMessage(''))
    }

    console.log(message, messages);
  }
  
  return (
    <main className='flex flex-row justify-center items-center p-5 bg-slate-400 h-screen'>
      <div className='flex flex-col justify-start w-2/5 bg-slate-600
                      border-2 border-gray-400 rounded-lg h-4/5 text-white'
        >
        <Infobar room={room} users={nameOfUsers}/>
        <Messages messages={messages} name={name}/>
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
      </div>
      {/* <TextContainer users={nameOfUsers}/> */}
    </main>
  )
}

export default Chat
